import React, { memo, useCallback, useEffect, useState } from 'react';
import Screen from 'components/Screen';
import Input from 'components/Input';
import { BaseButton, ButtonText } from 'components/BaseButton';
import Header from 'components/Header';
import {
    Dimensions,
    ListRenderItemInfo,
    Text,
    TouchableOpacity,
    TextInput,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { ScreenMap } from 'constants/screens';
import IconButtonText from 'components/IconButtonText';
import KeoIcon from 'images/svg/KeoIcon';
import { ORDER_TYPE } from 'constants/enums';
import CheckIcon from 'images/svg/CheckIcon';
import UnCheckIcon from 'images/svg/UnCheckIcon';
import QuetIcon from 'images/svg/QuetIcon';
import CaoIcon from 'images/svg/CaoIcon';
import { palette, typography } from 'theme';
import globalStyles from 'theme/global-style';
import FlatListLoadMore from 'components/FlatlistLoadMore';
import moment from 'moment';
import { useRoute } from '@react-navigation/native';
import { RouteScreenProps } from 'screen-type';
import styles from './styles';

const widthItem = Math.floor((Dimensions.get('screen').width - 32) / 81);

interface DatePick {
    date: string;
    day: string;
}

const listTime = [
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
];

const Ordercreen = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteScreenProps<ScreenMap.ORDER_SCREEN>>();

    const handleConfirm = () => {
        // navigation.navigate(ScreenMap.CREATE_PASS_SCREEN);
    };
    const [orderType, setOrderType] = useState<ORDER_TYPE>(
        route.params.orderType,
    );
    console.log('widthItem', widthItem);

    const [listDate, setListDate] = useState<DatePick[]>([]);
    const [dateTimePick, setDateTimePick] = useState<{
        datePick?: DatePick;
        time?: string;
    }>({ datePick: undefined, time: undefined });

    useEffect(() => {
        const genListDate: DatePick[] = [];
        for (let i = 0; i < 5; i += 1) {
            const m = moment().add(i, 'days');
            const day = m.format('ddd');
            const date = m.format('DD');
            genListDate.push({ date, day });
        }
        setListDate(genListDate);

        console.log('time', moment().format('HH'));
    }, []);

    const renderSelect = (
        title: string,
        type: ORDER_TYPE,
        leftIcon: React.ReactNode,
    ) => (
        <IconButtonText
            leftIcon={leftIcon}
            title={title}
            textStyle={{
                color: orderType == type ? palette.title : palette.white,
            }}
            rightIcon={
                orderType == type ? (
                    <CheckIcon width={24} height={24} />
                ) : (
                    <UnCheckIcon width={24} height={24} />
                )
            }
            style={styles.spaceFrom}
            onPress={() => {
                setOrderType(type);
            }}
        />
    );

    const renderListSelect = () => (
        <>
            <Text style={styles.title}>Bạn cần</Text>
            {renderSelect(
                'Cắt tóc nam',
                ORDER_TYPE.CAT_TOC_NAM,
                <KeoIcon width={32} height={32} />,
            )}
            {renderSelect(
                'Cắt tóc trẻ em',
                ORDER_TYPE.CAT_TOC_TRE_EM,
                <QuetIcon width={32} height={32} />,
            )}
            {renderSelect(
                'Cạo mặt, lấy ráy tai',
                ORDER_TYPE.CAO_MAT,
                <CaoIcon width={32} height={32} />,
            )}

            {renderSelect(
                'Cắt tóc nữ',
                ORDER_TYPE.CAT_TOC_NU,
                <KeoIcon width={32} height={32} />,
            )}
        </>
    );

    const renderItem = useCallback(
        ({ item }: ListRenderItemInfo<DatePick>) => (
            <TouchableOpacity
                style={[
                    styles.wrapperDate,
                    {
                        backgroundColor:
                            dateTimePick?.datePick == item
                                ? palette.black
                                : undefined,
                    },
                ]}
                activeOpacity={0.5}
                onPress={() => {
                    setDateTimePick((prev) => ({
                        datePick: item,
                        time: undefined,
                    }));
                }}>
                <Text style={styles.textDate}>{item.date}</Text>
                <Text style={styles.textDay}>{item.day}</Text>
            </TouchableOpacity>
        ),
        [dateTimePick],
    );

    const renderListDate = () => (
        <>
            <Text style={styles.title}>Chọn ngày</Text>
            <FlatListLoadMore
                horizontal
                showsHorizontalScrollIndicator={false}
                data={listDate}
                renderItem={renderItem}
                style={{ marginTop: 16 }}
            />
        </>
    );

    const renderTimeItem = useCallback(
        ({ item }: ListRenderItemInfo<string>) => {
            const currentDate = moment().format('DD');
            let isDisable = false;
            if (
                dateTimePick?.datePick &&
                currentDate == dateTimePick.datePick.date
            ) {
                const itemTime = Number(item.split(':')[0]);
                const currentTime = Number(moment().format('HH'));
                if (currentTime + 1 > itemTime) {
                    isDisable = true;
                }
            }
            let backgroundColor =
                dateTimePick?.time == item ? palette.title : palette.black;
            if (isDisable) backgroundColor = palette.bgActive;
            return (
                <TouchableOpacity
                    disabled={isDisable}
                    style={[
                        styles.wrapperTime,
                        {
                            backgroundColor,
                        },
                    ]}
                    activeOpacity={0.5}
                    onPress={() => {
                        setDateTimePick((prev) => ({
                            datePick: prev.datePick,
                            time: item,
                        }));
                    }}>
                    <Text
                        style={[
                            styles.textTime,
                            {
                                color:
                                    dateTimePick?.time == item
                                        ? palette.black
                                        : palette.label,
                            },
                        ]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            );
        },
        [dateTimePick],
    );

    const renderListTime = () => (
        <>
            <Text style={styles.title}>Chọn khung giờ</Text>
            <FlatListLoadMore
                numColumns={widthItem}
                data={listTime}
                renderItem={renderTimeItem}
                style={{ marginTop: 16 }}
            />
        </>
    );

    const renderNote = () => (
        <View>
            <Text style={styles.title}>Lưu ý:</Text>
            <TextInput multiline style={styles.note} />
        </View>
    );

    return (
        <Screen style={styles.container} preset="scroll">
            {renderListSelect()}
            {renderListDate()}
            {renderListTime()}
            {renderNote()}
            <BaseButton
                title="Tiếp tục"
                style={styles.spaceButton}
                onPress={handleConfirm}
            />
            <ButtonText
                title="Huỷ yêu cầu"
                style={styles.spaceButton}
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </Screen>
    );
};
export default memo(Ordercreen);
