import { StyleSheet } from 'react-native';
import { palette } from 'theme';

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
    modalContent: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 100,
    },
    center: { justifyContent: 'center', alignItems: 'center' },
    text: {
        fontWeight: '500',
        marginTop: 26,
        marginBottom: 42,
    },
});

export default styles;
