import { StyleSheet } from 'react-native';
import { palette, typography } from 'theme';

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    spaceButton: {
        marginTop: 34,
    },
    spaceHeader: {
        marginTop: 80,
    },
    spaceFrom: {
        marginTop: 8,
    },
    textDate: {
        fontFamily: typography.barlow,
        fontSize: 24,
        fontWeight: '400',
        lineHeight: 32,
        color: palette.title,
    },
    textTime: {
        fontFamily: typography.barlow,
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 28,
        color: palette.label,
    },
    textDay: {
        fontFamily: typography.googleSans,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 32,
        color: palette.white,
    },
    wrapperDate: {
        marginHorizontal: 8,
        width: 56,
        height: 76,
        borderRadius: 4,

        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperTime: {
        margin: 4,
        width: 75,
        height: 48,

        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: typography.barlow,
        fontSize: 22,
        fontWeight: '400',
        color: palette.title,
        lineHeight: 40,
        textTransform: 'uppercase',
        marginTop: 16,
    },
    note: {
        marginTop: 16,
        backgroundColor: palette.black,
        height: 100,
        color: palette.white,
        fontWeight: '400',
        fontFamily: typography.googleSans,
        fontSize: 16,
        lineHeight: 24,
        padding: 8,
    },
});

export default styles;
