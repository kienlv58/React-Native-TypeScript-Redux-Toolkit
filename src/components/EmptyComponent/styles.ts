import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    wrapper: {
        minHeight: 200,
        flex: 1,
        minWidth: screenWidth - 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
    },
});
export default styles;
