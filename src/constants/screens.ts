import { ParamListBase } from '@react-navigation/native';
import { BookType, ORDER_TYPE } from './enums';

export const NAV_BAR_SIZE = 44;

// export const LOGIN_SCREEN = 'LoginScreen';
// export const CREATE_PASS_SCREEN = 'CreateNewPassScreen';
// export const REGISTER_SCREEN = 'RegisterScreen';
// export const OTP_SCREEN = 'OPTScreen';
// export const FORGET_PASSWORD_SCREEN = 'ForgetPasswordScreen';
export const MAIN_SCREEN = 'MainScreen';

export const APP_STACK = 'AppStack';
export const AUTH_STACK = 'AuthStack';
export const TAB_SCREEN = 'TAB_SCREEN';

export enum ScreenMap {
    LIST_BOOK_SCREEN = 'LIST_BOOK_SCREEN',
    LOGIN_SCREEN = 'LOGIN_SCREEN',
    CREATE_PASS_SCREEN = 'CREATE_PASS_SCREEN',
    REGISTER_SCREEN = 'REGISTER_SCREEN',
    OTP_SCREEN = 'OTP_SCREEN',
    USER_INFO_SCREEN = 'USER_INFO_SCREEN',
    HOME_SCREEN = 'HOME_SCREEN',
    ORDER_SCREEN = 'ORDER_SCREEN',
    WHO_ARE_YOU_SCREEN = 'WHO_ARE_YOU_SCREEN',
    FORGET_PASSWORD_SCREEN = 'FORGET_PASSWORD_SCREEN',
}

export const TAB_NAME = {
    DISCOVERY: 'DISCOVERY',
    MY_BOOK: 'MY_BOOK',
    NOTIFICATION: 'NOTIFICATION',
    MY_ACCOUNT: 'MY_ACCOUNT',
};
export interface ScreenParams extends ParamListBase {
    [ScreenMap.LIST_BOOK_SCREEN]: {
        type: BookType;
        title: string;
        categoryId?: number;
    };
    [ScreenMap.REGISTER_SCREEN]: { id?: string };
    [ScreenMap.LOGIN_SCREEN]: { id?: string };
    [ScreenMap.USER_INFO_SCREEN]: { type: number };
    [ScreenMap.ORDER_SCREEN]: { orderType: ORDER_TYPE };
}
