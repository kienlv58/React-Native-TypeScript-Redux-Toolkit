import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import Text from 'components/Text';
import { ScreenMap } from 'constants/screens';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/slices/sessionSlice';
import { palette } from 'theme';

const ItemHeigh = 56;
const styles = StyleSheet.create({
    icon: { width: 35, height: 35 },
    wrapperItem: {
        flexDirection: 'row',
        height: ItemHeigh,
        backgroundColor: palette.black,
        alignItems: 'center',
    },
    wrapperImage: {
        backgroundColor: palette.orange2,
        height: ItemHeigh,
        width: ItemHeigh + 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        color: palette.white,
        textTransform: 'uppercase',
        fontSize: 14,
        paddingLeft: 10,
    },
    bottomLine: {
        width: '100%',
        height: 1,
        backgroundColor: palette.black,
    },
});
interface MenuItem {
    id: number;
    icon?: number;
    title: string;
    onPress: () => void;
}
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const dispatch = useDispatch();
    const menuRef = useRef<MenuItem[]>([
        {
            id: 10,
            icon: undefined,
            title: 'Đăng xuất',
            onPress: () => {
                dispatch(logout());
            },
        },
    ]);

    const renderItem = useCallback(
        (item: MenuItem) => (
            <View key={item.id}>
                <TouchableOpacity
                    onPress={item.onPress}
                    style={styles.wrapperItem}>
                    <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>
                <View style={styles.bottomLine} />
            </View>
        ),
        [],
    );
    return (
        <DrawerContentScrollView {...props}>
            {menuRef.current.map((item) => renderItem(item))}
        </DrawerContentScrollView>
    );
};
export default CustomDrawerContent;
