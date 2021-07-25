import React, { memo } from 'react';
import Screen from 'components/Screen';
import Input from 'components/Input';
import { BaseButton, ButtonText } from 'components/BaseButton';
import Header from 'components/Header';
import { useNavigation } from '@react-navigation/core';
import { ScreenMap } from 'constants/screens';
import styles from './styles';

const OPTScreen = () => {
    const navigation = useNavigation();
    const handleConfirm = () => {
        navigation.navigate(ScreenMap.CREATE_PASS_SCREEN);
    };
    return (
        <Screen
            style={styles.container}
            preset="scroll"
            customHeader={<Header title="Nhập mã OTP" />}>
            <Input
                label="Nhập mã OPT"
                keyboardType="numeric"
                style={styles.spaceHeader}
            />
            <BaseButton
                title="Xác nhận"
                style={styles.spaceButton}
                onPress={handleConfirm}
            />
            <ButtonText title="Gửi lại mã OPT" style={styles.spaceButton} />
        </Screen>
    );
};

OPTScreen.navigationOption = {
    title: 'OPTScreen',
};

export default memo(OPTScreen);
