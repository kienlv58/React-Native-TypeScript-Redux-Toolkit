import Screen from 'components/Screen';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Discovery = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Screen preset="scroll">
            <Text>Home Screen</Text>
            <View style={{ backgroundColor: 'red', height: 2000 }} />
            <Text>Home Screen</Text>
        </Screen>
    );
};

export default Discovery;
