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
import { Settings } from 'react-native-fbsdk-next';
import Navigation from 'navigators';
import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import appConfigureStore from './src/redux/store';
import { palette } from './src/theme';

const { store, persistor } = appConfigureStore();
if (__DEV__) {
    import('./ReactotronConfig').then(() =>
        console.log('Reactotron Configured'),
    );
}

const App = () => {
    Settings.initializeSDK();
    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                '658699632475-n68pir5c03p5jpegpn97ksli8puerlgt.apps.googleusercontent.com', // client ID of type WEB for your server(needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            accountName: '', // [Android] specifies an account name on the device that should be used
        });
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <Navigation />
                <GlobalLoading />
            </PersistGate>
            <SafeAreaView style={{ backgroundColor: palette.primary2 }} />
        </Provider>
    );
};

export default App;
