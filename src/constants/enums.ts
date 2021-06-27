import { typography } from 'theme';

export enum BookType {
    HOT = 'HOT',
    NEW = 'NEW',
    FULL = 'FULL',
    CATEGORY = 'CATEGORY',
}

export enum ColorType {
    COLOR1 = '#f6f7fb',
    COLOR2 = '#f5f1e6',
    COLOR3 = '#dee4e2',
    COLOR4 = '#808388',
    COLOR5 = '#e1cfa1',
    COLOR6 = '#131218',
    COLOR7 = '#1D212B',
}

export const fontFamily = {
    Lora: typography.lora,
    Karla: typography.karla,
    Cardo: typography.cardo,
    Avenir: typography.avenir,
};
export const readerTextAlign = {
    Left: 'left',
    Right: 'right',
    Center: 'center',
    Justify: 'justify',
};
export const PAG_SIZE_CHAPTER = 20;
export const PAG_SIZE_BOOK = 25;

export enum LOGIN_TYPE {
    FACEBOOK = 'FACEBOOK',
    GOOGLE = 'GOOGLE',
    APPLE = 'APPLE',
}
