import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'react-native';
import { fetchUserInfo } from 'redux/slices/sessionSlice';
import Screen from 'components/Screen';
import globalStyles from 'theme/global-style';
import Input from 'components/Input';
import { BaseButton, ButtonText } from 'components/BaseButton';
import { useNavigation } from '@react-navigation/core';
import { ScreenMap, ScreenParams } from 'constants/screens';
import { NavigationScreenProps } from 'screen-type';
import styles from './styles';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const navigation =
        useNavigation<NavigationScreenProps<ScreenMap.REGISTER_SCREEN>>();
    const loginRequest = useCallback(
        () => dispatch(fetchUserInfo('kienlv58')),
        [dispatch],
    );

    const handleRegister = () => {
        navigation.replace(ScreenMap.REGISTER_SCREEN, {});
    };

    const handleForgetPass = () => {
        navigation.navigate(ScreenMap.FORGET_PASSWORD_SCREEN);
    };

    return (
        <Screen style={styles.container} preset="scroll">
            <Text style={[globalStyles.title, styles.spaceHeader]}>
                Đăng Nhập
            </Text>
            <Input label="Tài khoản" style={styles.spaceForm} />
            <Input label="Mật khẩu" secureTextEntry style={styles.spaceForm} />
            <BaseButton
                title="Đăng nhập"
                style={styles.spaceButton}
                onPress={loginRequest}
            />
            <ButtonText
                title="Đăng ký"
                style={styles.spaceButton2}
                onPress={handleRegister}
            />
            <ButtonText title="Quên mật khẩu" onPress={handleForgetPass} />
        </Screen>
    );
};

LoginScreen.navigationOption = {
    title: 'Login',
};

export default memo(LoginScreen);
