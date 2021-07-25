import React, { memo } from 'react';
import { Text } from 'react-native';
import Screen from 'components/Screen';
import globalStyles from 'theme/global-style';
import Input from 'components/Input';
import { BaseButton, ButtonText } from 'components/BaseButton';
import { ScreenMap } from 'constants/screens';
import { useNavigation } from '@react-navigation/core';
import { NavigationScreenProps } from 'screen-type';
import styles from './styles';

const RegisterScreen = () => {
    const navigation =
        useNavigation<NavigationScreenProps<ScreenMap.LOGIN_SCREEN>>();

    const handleLogin = () => {
        navigation.replace(ScreenMap.LOGIN_SCREEN, {});
    };
    return (
        <Screen style={styles.container} preset="scroll">
            <Text style={[globalStyles.title, styles.spaceHeader]}>
                Đăng ký tài khoản
            </Text>
            <Input label="Tài khoản" style={styles.spaceForm} />
            <Input label="Mật khẩu" secureTextEntry style={styles.spaceForm} />
            <Input
                label="Nhập lại mật khẩu"
                secureTextEntry
                style={styles.spaceForm}
            />
            <BaseButton title="Đăng ký" style={styles.spaceButton} />
            <ButtonText
                title="Đăng nhập"
                style={styles.spaceButton}
                onPress={handleLogin}
            />
        </Screen>
    );
};

RegisterScreen.navigationOption = {
    title: 'register',
};

export default memo(RegisterScreen);
