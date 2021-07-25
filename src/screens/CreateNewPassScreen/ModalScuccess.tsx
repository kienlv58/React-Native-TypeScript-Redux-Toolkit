import React, { ReactElement } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from 'screens/CreateNewPassScreen/styles';
import { BaseButton } from 'components/BaseButton';
import { useNavigation } from '@react-navigation/core';
import { ScreenMap } from 'constants/screens';
import { palette } from 'theme';
import SuccessIcon from 'images/svg/SuccessIcon';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

interface Props {
    isVisible: boolean;
}
const ModalSuccess = (props: Props): ReactElement => {
    const navigation = useNavigation();
    const handleSuccess = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: ScreenMap.LOGIN_SCREEN }],
        });
    };
    return (
        <Modal
            isVisible={props.isVisible}
            statusBarTranslucent
            backdropOpacity={1}
            backdropColor={palette.primary}
            deviceHeight={deviceHeight}
            deviceWidth={deviceWidth}>
            <View style={styles.modalContent}>
                <View style={styles.center}>
                    <SuccessIcon />
                    <Text style={styles.text}>Đổi mật khẩu thành công</Text>
                </View>
                <BaseButton title="Đăng nhập ngay" onPress={handleSuccess} />
            </View>
        </Modal>
    );
};
export default ModalSuccess;
