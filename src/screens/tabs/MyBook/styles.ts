import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const widthItem = screenWidth / 3 - 20;
const styles = StyleSheet.create({
    wrapperHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    lineBottom: {
        height: 2.5,
        backgroundColor: '#26a69a',
        marginVertical: 5,
        borderRadius: 5,
    },
    wrapper: { paddingHorizontal: 10, paddingBottom: 20 },
    image: {
        width: '100%',
        height: (screenWidth / 3 - 20) * 1.5,
        borderRadius: 10,
    },
    wrapperItem: {
        flex: 1,
        marginRight: 10,
        width: widthItem,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    name: { paddingVertical: 5 },
    flatList: { marginTop: 10 },
    gradient: {
        position: 'absolute',
        height: 40,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    textChapter: {
        color: 'white',
        paddingLeft: 10,
        paddingBottom: 5,
    },
    image2: {
        width: '100%',
        height: widthItem + widthItem * (2 / 3),
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#CFD0D2',
    },
    textTitle: { fontSize: 18, fontWeight: '500' },
    bookmark: { paddingHorizontal: 5, position: 'absolute', right: 12 },
});

export default styles;
