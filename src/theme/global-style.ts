import { StyleSheet } from 'react-native';
import { typography } from './typography';
import { palette } from './palette';

const globalStyles = StyleSheet.create({
    title: {
        fontFamily: typography.barlow,
        fontSize: 30,
        fontWeight: '400',
        color: palette.title,
        textTransform: 'uppercase',
    },
});

export default globalStyles;
