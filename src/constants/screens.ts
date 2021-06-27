import { ParamListBase } from '@react-navigation/native';
import { BookType } from './enums';

export const NAV_BAR_SIZE = 46;

export const LOGIN_SCREEN = 'LoginScreen';
export const MAIN_SCREEN = 'MainScreen';

export const APP_STACK = 'AppStack';
export const AUTH_STACK = 'AuthStack';
export const TAB_SCREEN = 'TAB_SCREEN';

export enum ScreenMap {
    LIST_BOOK_SCREEN = 'LIST_BOOK_SCREEN',
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
}
