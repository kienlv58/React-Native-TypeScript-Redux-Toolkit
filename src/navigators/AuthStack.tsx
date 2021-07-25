import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from 'screens/LoginScreen';
import RegisterScreen from 'screens/RegisterScreen';
import ForgetPassWordScreen from 'screens/ForgetPassWordScreen';
import OPTScreen from 'screens/OPTScreen';
import CreateNewPassScreen from 'screens/CreateNewPassScreen';
import { ScreenMap } from 'constants/screens';

const Stack = createStackNavigator();

const AuthStack = () => (
    <Stack.Navigator
        headerMode="none"
        initialRouteName={ScreenMap.LOGIN_SCREEN}
        screenOptions={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: ({ current, layouts }) => ({
                cardStyle: {
                    transform: [
                        {
                            translateX: current.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [layouts.screen.width, 0],
                            }),
                        },
                    ],
                },
            }),
        }}>
        <Stack.Screen name={ScreenMap.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
            name={ScreenMap.CREATE_PASS_SCREEN}
            component={CreateNewPassScreen}
        />
        <Stack.Screen
            name={ScreenMap.REGISTER_SCREEN}
            component={RegisterScreen}
        />
        <Stack.Screen
            name={ScreenMap.FORGET_PASSWORD_SCREEN}
            component={ForgetPassWordScreen}
        />
        <Stack.Screen name={ScreenMap.OTP_SCREEN} component={OPTScreen} />
    </Stack.Navigator>
);

export default AuthStack;
