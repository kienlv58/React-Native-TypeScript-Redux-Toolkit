import { StyleSheet } from 'react-native';
import { palette, typography } from 'theme';

const styles = StyleSheet.create({
    modalContent: {
        flex: undefined,
        alignSelf: 'center',
        width: '90%',
    },
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: { justifyContent: 'center', alignItems: 'center', flex: 1 },
    item: {
        paddingVertical: 20,
    },
    selectToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        color: palette.white,
        fontSize: 18,
        fontWeight: '500',
        backgroundColor: palette.black,
        height: 56,
        marginTop: 8,
        paddingHorizontal: 16,
    },
    selectToggleText: {
        alignSelf: 'center',
        textAlignVertical: 'center',
        color: palette.white,
        fontFamily: typography.googleSans,
        fontSize: 18,
        fontWeight: '500',
    },
    chipsWrapper: {
        marginTop: 10,
    },
    button: {
        height: 50,
    },
    label: {
        fontSize: 16,
        color: palette.label,
        fontWeight: '400',
    },
});
export default styles;
