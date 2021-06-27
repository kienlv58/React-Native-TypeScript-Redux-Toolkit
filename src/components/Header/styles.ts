import { StyleSheet } from 'react-native';
import { palette } from 'theme';
import { NAV_BAR_SIZE } from 'constants/screens';

const styles = StyleSheet.create({
    wrapperHeader: {
        height: NAV_BAR_SIZE,
        backgroundColor: palette.primary2,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    backIcon: {
        width: NAV_BAR_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperTitle: {
        flex: 1,
        height: '100%',
        marginRight: NAV_BAR_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default styles;
