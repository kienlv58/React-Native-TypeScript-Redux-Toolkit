import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reactotron from '../../../ReactotronConfig';
import rootReducer from '../slices/rootReducer';

export default function appConfigureStore() {
    const middlewares = [];

    const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
        whitelist: ['session', 'setting', 'myBooks', 'user'],
    };

    if (__DEV__) {
        const logger = createLogger({
            collapsed: true,
        });
        middlewares.push(logger);
    }

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const enhancers = [];
    if (reactotron && reactotron.createEnhancer !== undefined) {
        enhancers.push(reactotron?.createEnhancer());
    }
    const store = configureStore({
        reducer: persistedReducer,
        middleware: getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(middlewares),
        enhancers,
        devTools: process.env.NODE_ENV !== 'production',
    });
    const persistor = persistStore(store);

    return { store, persistor };
}
