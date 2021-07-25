/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import GlobalLoading from 'components/GlobalLoading';
import Navigation from 'navigators';
import React, { useEffect } from 'react';
import { setCustomText } from 'react-native-global-props';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import SplashScreen from 'react-native-splash-screen';
import appConfigureStore from './src/redux/store';
import { palette, typography } from './src/theme';

const customTextProps = {
    style: {
        fontSize: 16,
        fontFamily: typography.googleSans,
        color: palette.white,
    },
};
setCustomText(customTextProps);

const { store, persistor } = appConfigureStore();

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <Navigation />
                <GlobalLoading />
            </PersistGate>
            <SafeAreaView style={{ backgroundColor: palette.primary }} />
        </Provider>
    );
};

export default App;
