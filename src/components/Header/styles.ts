import { StyleSheet } from 'react-native';
import { palette, typography } from 'theme';
import { NAV_BAR_SIZE } from 'constants/screens';

const styles = StyleSheet.create({
    wrapperHeader: {
        height: NAV_BAR_SIZE,
        backgroundColor: palette.primary,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    backIcon: {
        width: NAV_BAR_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.black,
        marginLeft: 16,
    },
    wrapperTitle: {
        flex: 1,
        height: '100%',
        marginRight: NAV_BAR_SIZE,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 16,
    },
    title: {
        fontSize: 22,
        fontFamily: typography.barlow,
        fontWeight: '400',
        textTransform: 'uppercase',
        color: palette.title,
    },
});

export default styles;
