import { StyleSheet } from 'react-native';
import { palette, typography } from 'theme';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: palette.black,
        flexDirection: 'row',
        minHeight: 72,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    title: {
        flex: 1,
        paddingHorizontal: 16,
        fontSize: 18,
        fontWeight: '500',
        fontFamily: typography.googleSans,
    },
});
export default styles;
