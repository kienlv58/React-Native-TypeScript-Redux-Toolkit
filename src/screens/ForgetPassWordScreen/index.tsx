import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'react-native';
import { fetchUserInfo } from 'redux/slices/sessionSlice';
import Screen from 'components/Screen';
import globalStyles from 'theme/global-style';
import Input from 'components/Input';
import { BaseButton, ButtonText } from 'components/BaseButton';
import Header from 'components/Header';
import { useNavigation } from '@react-navigation/core';
import { ScreenMap } from 'constants/screens';
import styles from './styles';

const ForgetPassWordScreen = () => {
    const navigation = useNavigation();
    const handleConfirm = () => {
        navigation.navigate(ScreenMap.OTP_SCREEN);
    };

    return (
        <Screen
            style={styles.container}
            preset="scroll"
            customHeader={<Header title="Quên mật khẩu" />}>
            <Input
                label="Nhập số điện thoại"
                keyboardType="numeric"
                style={styles.spaceHeader}
            />
            <BaseButton
                title="Xác nhận"
                style={styles.spaceButton}
                onPress={handleConfirm}
            />
        </Screen>
    );
};

ForgetPassWordScreen.navigationOption = {
    title: 'ForgetPassWordScreen',
};

export default memo(ForgetPassWordScreen);
