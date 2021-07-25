import { StyleSheet } from 'react-native';
import { palette, typography } from 'theme';

const styles = StyleSheet.create({
    button: {
        height: 56,
        backgroundColor: palette.title,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        minHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: typography.barlow,
        fontSize: 20,
        fontWeight: '600',
        color: palette.primary,
        textTransform: 'uppercase',
    },
    titleGrey: {
        fontFamily: typography.barlow,
        fontSize: 20,
        fontWeight: '400',
        color: palette.label,
        textTransform: 'uppercase',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default styles;
