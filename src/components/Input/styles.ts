import { StyleSheet } from 'react-native';
import { palette, typography } from 'theme';

const styles = StyleSheet.create({
    input: {
        color: palette.white,
        fontSize: 18,
        fontWeight: '500',
        backgroundColor: palette.black,
        height: 56,
        marginTop: 8,
        paddingHorizontal: 16,
        fontFamily: typography.googleSans,
    },
    label: {
        fontSize: 16,
        color: palette.label,
        fontWeight: '400',
    },
});
export default styles;
