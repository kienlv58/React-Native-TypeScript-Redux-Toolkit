import { useEffect } from 'react';

import { BackHandler, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export const useBackButton = () => {
    const navigation = useNavigation();
    const onBackPress = () => {
        BackHandler.exitApp();
        return true;
    };
    useEffect(() => {
        if (Platform.OS == 'android') {
            navigation.addListener('focus', () => {
                BackHandler.addEventListener('hardwareBackPress', onBackPress);
            });
            navigation.addListener('blur', () => {
                BackHandler.removeEventListener(
                    'hardwareBackPress',
                    onBackPress,
                );
            });
        }
    }, [onBackPress]);
};
