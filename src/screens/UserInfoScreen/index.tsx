import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'react-native';
import Screen from 'components/Screen';
import globalStyles from 'theme/global-style';
import Input from 'components/Input';
import { BaseButton, ButtonText } from 'components/BaseButton';
import { useNavigation } from '@react-navigation/core';
import { ScreenMap, ScreenParams } from 'constants/screens';
import { NavigationScreenProps, RouteScreenProps } from 'screen-type';
import IconButtonText from 'components/IconButtonText';
import UnCheckIcon from 'images/svg/UnCheckIcon';
import CheckIcon from 'images/svg/CheckIcon';
import MultipleSelect from 'components/MultipleSelect';
import KeoIcon from 'images/svg/KeoIcon';
import QuetIcon from 'images/svg/QuetIcon';
import { ORDER_TYPE } from 'constants/enums';
import { palette } from 'theme';
import { useRoute } from '@react-navigation/native';
import styles from './styles';

const UserInfoScreen = () => {
    const dispatch = useDispatch();
    const route = useRoute<RouteScreenProps<ScreenMap.USER_INFO_SCREEN>>();
    const navigation =
        useNavigation<NavigationScreenProps<ScreenMap.REGISTER_SCREEN>>();

    const [orderType, setOrderType] = useState<ORDER_TYPE>(
        ORDER_TYPE.CAT_TOC_NAM,
    );
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
            style={styles.spaceForm}
            onPress={() => {
                setOrderType(type);
            }}
        />
    );
    return (
        <Screen style={styles.container} preset="scroll">
            <Text style={[globalStyles.title, styles.spaceHeader]}>
                Thông tin cá nhân
            </Text>
            <Input label="Họ và tên" style={styles.spaceForm} />
            <Input
                label="Số điện thoại"
                keyboardType="numeric"
                maxLength={12}
                style={styles.spaceForm}
            />
            <MultipleSelect
                label="Giới tính"
                data={[{ name: 'Nam' }, { name: 'Nữ' }]}
                style={styles.spaceForm}
            />
            <MultipleSelect
                label="Tỉnh/Thành phố"
                data={[
                    { name: 'Hà Nội' },
                    { name: 'TP. Hồ Chí Minh' },
                    { name: 'Đà Nẵng' },
                ]}
                style={styles.spaceForm}
            />
            <MultipleSelect
                label="Quận/huyện"
                data={[{ name: 'Hà Đông' }, { name: 'Cầu Giấy' }]}
                style={styles.spaceForm}
            />
            <MultipleSelect
                label="Xã phường"
                data={[{ name: 'La Khê' }, { name: 'Mai dịch' }]}
                style={styles.spaceForm}
            />
            <Input label="Địa chỉ" style={styles.spaceForm} />
            {route?.params?.type == 2 && (
                <>
                    <Text style={[globalStyles.title, styles.spaceForm]}>
                        Dịch vụ cung cấp
                    </Text>
                    {renderSelect(
                        'Cắt tóc nam',
                        ORDER_TYPE.CAT_TOC_NAM,
                        <KeoIcon width={32} height={32} />,
                    )}
                    {renderSelect(
                        'Cắt tóc trẻ em',
                        ORDER_TYPE.CAT_TOC_NU,
                        <QuetIcon width={32} height={32} />,
                    )}
                </>
            )}

            <BaseButton
                title="Cập nhật"
                style={styles.spaceButton}
                onPress={() => {
                    navigation.navigate(ScreenMap.HOME_SCREEN);
                }}
            />
        </Screen>
    );
};

export default memo(UserInfoScreen);
