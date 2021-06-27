import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, Button } from 'react-native';
import { LOGIN_SCREEN } from 'constants/screens';
import { fetchUserInfo } from 'redux/slices/sessionSlice';
import styles from './styles';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const loginRequest = useCallback(
        () => dispatch(fetchUserInfo('kienlv58')),
        [dispatch],
    );

    return (
        <View style={styles.container} testID={LOGIN_SCREEN}>
            <Button
                testID="sign-up-button"
                title="login"
                onPress={loginRequest}
            />
        </View>
    );
};

LoginScreen.navigationOption = {
    title: 'Login',
};

export default memo(LoginScreen);
