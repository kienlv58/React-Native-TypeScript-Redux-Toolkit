import { Dimensions, StyleSheet } from 'react-native';
import { palette } from 'theme';
import globalStyles from 'theme/global-style';

const widthItem = (Dimensions.get('screen').width - 48) / 2;

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    wrapperRowSelect: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    itemSelect: {
        width: widthItem,
        height: widthItem,
        backgroundColor: palette.black,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSelect: {
        ...globalStyles.normalText,
        marginTop: 20,
    },
});

export default styles;
