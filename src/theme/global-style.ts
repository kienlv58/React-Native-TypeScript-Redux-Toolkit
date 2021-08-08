import { StyleSheet } from 'react-native';
import { typography } from './typography';
import { palette } from './palette';

const globalStyles = StyleSheet.create({
    title: {
        fontFamily: typography.barlow,
        fontSize: 30,
        fontWeight: '400',
        color: palette.title,
        lineHeight: 32,
        textTransform: 'uppercase',
    },
    h2: {
        fontFamily: typography.barlow,
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 40,
        color: palette.title,
        textTransform: 'uppercase',
    },
    normalText: {
        fontFamily: typography.googleSans,
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 40,
        color: palette.white,
    },
});

export default globalStyles;
