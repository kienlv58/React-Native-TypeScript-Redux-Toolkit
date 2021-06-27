import React from 'react';
import { Text } from 'react-native';
import Screen from 'components/Screen';
import Header from 'components/Header';
import { useBackButton } from '../useBackButton';

const MyAccount = () => {
    useBackButton();

    return (
        <Screen customHeader={<Header title="Tài khoản" isHideBack />}>
            <Text>My Account</Text>
        </Screen>
    );
};

export default MyAccount;
