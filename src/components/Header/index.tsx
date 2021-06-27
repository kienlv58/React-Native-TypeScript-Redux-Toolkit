import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { palette } from 'theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import Text from 'components/Text';
import { NAV_BAR_SIZE } from 'constants/screens';
import styles from './styles';

interface Props {
    title?: string;
    isHideBack?: boolean;
}
const Header = ({ title, isHideBack }: Props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.wrapperHeader}>
            {!isHideBack && (
                <TouchableOpacity
                    style={styles.backIcon}
                    onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons
                        name="chevron-left"
                        size={40}
                        color={palette.white}
                    />
                </TouchableOpacity>
            )}
            <View
                style={[
                    styles.wrapperTitle,
                    { marginLeft: isHideBack ? NAV_BAR_SIZE : 0 },
                ]}>
                <Text text={title} style={styles.title} numberOfLines={1} />
            </View>
        </View>
    );
};
export default Header;
