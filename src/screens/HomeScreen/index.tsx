import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Dimensions,
    ListRenderItemInfo,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Screen from 'components/Screen';
import globalStyles from 'theme/global-style';
import { BaseButton } from 'components/BaseButton';
import { useNavigation } from '@react-navigation/core';
import { ScreenMap } from 'constants/screens';
import { NavigationScreenProps } from 'screen-type';
import IconButtonText from 'components/IconButtonText';
import UnCheckIcon from 'images/svg/UnCheckIcon';
import CheckIcon from 'images/svg/CheckIcon';
import { TextInput } from 'react-native-gesture-handler';
import { palette } from 'theme';
import MenuIcon from 'images/svg/MenuIcon';
import LocationIcon from 'images/svg/LocationIcon';
import KeoIcon from 'images/svg/KeoIcon';
import CaoIcon from 'images/svg/CaoIcon';
import QuetIcon from 'images/svg/QuetIcon';
import FlatListLoadMore from 'components/FlatlistLoadMore';
import FastImage from 'react-native-fast-image';
import { ORDER_TYPE } from 'constants/enums';
import styles from './styles';

const HomeScreen = ({ navigation }: any) => {
    const renderHeader = useCallback(
        () => (
            <View
                style={{
                    height: 44,
                    flexDirection: 'row',
                    marginHorizontal: 16,
                }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation?.toggleDrawer();
                    }}
                    activeOpacity={0.5}
                    style={{
                        width: 44,
                        height: 44,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: palette.bgActive,
                    }}>
                    <MenuIcon />
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        paddingRight: 16,
                    }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                            flexDirection: 'row',
                            flex: 1,
                            height: 44,
                            alignItems: 'center',
                            paddingLeft: 16,
                            backgroundColor: palette.black,
                        }}>
                        <LocationIcon />
                        <Text
                            numberOfLines={1}
                            style={{ flexShrink: 1, marginLeft: 16 }}>
                            R 515, CT1 Khu đô thị văn khê, Hà Đông, Hà Nội
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        ),
        [],
    );

    const renderSelectItem = (
        title: string,
        type: ORDER_TYPE,
        icon: React.ReactNode,
    ) => (
        <TouchableOpacity
            style={styles.itemSelect}
            activeOpacity={0.5}
            onPress={() => {
                navigation.navigate(ScreenMap.ORDER_SCREEN, {
                    orderType: type,
                });
            }}>
            {icon}
            <Text style={styles.textSelect}>{title}</Text>
        </TouchableOpacity>
    );

    const renderSelect = useCallback(
        () => (
            <View style={{ paddingHorizontal: 16 }}>
                <Text style={[globalStyles.h2, { marginTop: 40 }]}>
                    Bạn cần:
                </Text>
                <View style={styles.wrapperRowSelect}>
                    {renderSelectItem(
                        'Cắt tóc nam',
                        ORDER_TYPE.CAT_TOC_NAM,
                        <KeoIcon />,
                    )}
                    {renderSelectItem(
                        'Cắt tóc trẻ em',
                        ORDER_TYPE.CAT_TOC_TRE_EM,
                        <QuetIcon />,
                    )}
                </View>
                <View style={styles.wrapperRowSelect}>
                    {renderSelectItem(
                        'Cạo mặt, lấy ráy tai',
                        ORDER_TYPE.CAO_MAT,
                        <CaoIcon />,
                    )}
                    {renderSelectItem(
                        'Cắt tóc nữ',
                        ORDER_TYPE.CAT_TOC_NU,
                        <KeoIcon />,
                    )}
                </View>
            </View>
        ),
        [],
    );
    const renderItem = useCallback(
        (info: ListRenderItemInfo<any>) => (
            <View style={{ margin: 20 }}>
                <FastImage
                    source={{
                        uri: 'https://www.ifacehairdressing.com/assets/front/images/portfolio/man-style1.jpg',
                    }}
                    style={{ width: 80, height: 80, borderRadius: 40 }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <Text>Kien Lo</Text>
            </View>
        ),
        [],
    );

    const renderStylist = useCallback(
        () => (
            <View style={{ margin: 16 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 16,
                        alignItems: 'center',
                    }}>
                    <Text style={[globalStyles.h2]}>Stylst nổi bật</Text>
                    <TouchableOpacity
                        style={{ paddingVertical: 16 }}
                        activeOpacity={0.5}>
                        <Text>View all</Text>
                    </TouchableOpacity>
                </View>
                <FlatListLoadMore
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4, 6, 7, 8]}
                    renderItem={renderItem}
                />
            </View>
        ),
        [],
    );
    return (
        <Screen style={{}} preset="scroll" customHeader={renderHeader()}>
            {renderSelect()}
            {renderStylist()}
        </Screen>
    );
};

export default memo(HomeScreen);
