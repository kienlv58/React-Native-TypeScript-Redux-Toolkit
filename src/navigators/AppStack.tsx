import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenMap, TAB_NAME, TAB_SCREEN } from 'constants/screens';
import TabBookStoreIcon from 'images/svg/TabBookStoreIcon';
import { palette, typography } from 'theme';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import WhoAreYouScreen from 'screens/WhoAreYouScreen';
import UserInfoScreen from 'screens/UserInfoScreen';
import HomeScreen from 'screens/HomeScreen';
import OrderScreen from 'screens/OrderScreen';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const optionsTab = ({ tabName }: { tabName: string }) => ({
//     tabBarIcon: ({ color }: { color: string }) => (
//         <>
//             {tabName === TAB_NAME.DISCOVERY && (
//                 <TabHomeIcon fillColor={color} />
//             )}
//             {tabName === TAB_NAME.MY_BOOK && (
//                 <TabBookStoreIcon fillColor={color} />
//             )}
//             {tabName === TAB_NAME.NOTIFICATION && (
//                 <TabNotifyIcon fillColor={color} />
//             )}
//             {tabName === TAB_NAME.MY_ACCOUNT && (
//                 <TabProfileIcon fillColor={color} />
//             )}
//         </>
//     ),
// });

// const AppTab = () => (
//     <Tab.Navigator
//         tabBarOptions={{
//             tabStyle: {
//                 backgroundColor: palette.primary,
//                 elevation: 0, // for Android
//                 shadowOffset: {
//                     width: 0,
//                     height: 0, // for iOS
//                 },
//             },
//             showLabel: false,
//             style: {
//                 borderTopWidth: 0,
//             },
//             activeTintColor: palette.primary,
//             inactiveTintColor: palette.tabInactive,
//             labelStyle: { fontSize: 12, fontFamily: typography.primary },
//             allowFontScaling: true,
//         }}>
//         <Tab.Screen
//             name={TAB_NAME.DISCOVERY}
//             component={Discovery}
//             options={optionsTab({
//                 tabName: TAB_NAME.DISCOVERY,
//             })}
//         />
//         <Tab.Screen
//             name={TAB_NAME.MY_BOOK}
//             component={MyBook}
//             options={optionsTab({
//                 tabName: TAB_NAME.MY_BOOK,
//             })}
//         />
//         <Tab.Screen
//             name={TAB_NAME.NOTIFICATION}
//             component={Notification}
//             options={optionsTab({
//                 tabName: TAB_NAME.NOTIFICATION,
//             })}
//         />
//         <Tab.Screen
//             name={TAB_NAME.MY_ACCOUNT}
//             component={MyAccount}
//             options={optionsTab({
//                 tabName: TAB_NAME.MY_ACCOUNT,
//             })}
//         />
//     </Tab.Navigator>
// );

const AppStack = () => (
    <Stack.Navigator
        headerMode="none"
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
        <Stack.Screen
            name={ScreenMap.WHO_ARE_YOU_SCREEN}
            component={WhoAreYouScreen}
        />
        <Stack.Screen
            name={ScreenMap.USER_INFO_SCREEN}
            component={UserInfoScreen}
        />
        <Stack.Screen name={ScreenMap.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={ScreenMap.ORDER_SCREEN} component={OrderScreen} />
    </Stack.Navigator>
);
const Drawer = createDrawerNavigator();
const AppDrawer = () => (
    <Drawer.Navigator
        initialRouteName="Main"
        drawerContent={(props: any) => <CustomDrawerContent {...props} />}
        drawerStyle={{
            backgroundColor: palette.primary,
        }}>
        <Drawer.Screen name="Main" component={AppStack} />
    </Drawer.Navigator>
);

export default AppDrawer;
