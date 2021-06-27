import { StyleSheet } from 'react-native';
import { palette, typography } from 'theme';

const styles = StyleSheet.create({
    wrapperSearch: { flexDirection: 'row', height: 40 },
    inputSearch: {
        flex: 1,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderColor: palette.primary,
        borderWidth: 1,
        paddingHorizontal: 5,
        color: palette.white,
        fontFamily: typography.primary,
    },
    buttonSearch: {
        backgroundColor: palette.primary,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
