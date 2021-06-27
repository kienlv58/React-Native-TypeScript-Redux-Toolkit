import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { APP_STACK } from 'constants/screens';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { palette } from 'theme';
import { selectSessionData } from 'redux/slices/sessionSlice';
import AppStack from './AppStack';

const Stack = createStackNavigator();

const Navigation = () => {
    const { user } = useSelector(selectSessionData);
    console.log('user', user);

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StatusBar
                    backgroundColor={palette.primary2}
                    barStyle="dark-content"
                    translucent
                />
                <Stack.Navigator headerMode="none">
                    {/* {user ? ( */}
                    {/*  <Stack.Screen name={APP_STACK} component={AppStack} /> */}
                    {/* ) : ( */}
                    {/*  <Stack.Screen name={AUTH_STACK} component={AuthStack} /> */}
                    {/* )} */}
                    <Stack.Screen name={APP_STACK} component={AppStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default Navigation;
