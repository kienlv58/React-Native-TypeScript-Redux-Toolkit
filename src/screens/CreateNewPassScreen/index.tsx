import React, { memo, useState } from 'react';
import Screen from 'components/Screen';
import Input from 'components/Input';
import { BaseButton } from 'components/BaseButton';
import Header from 'components/Header';
import ModalSuccess from 'screens/CreateNewPassScreen/ModalScuccess';
import styles from './styles';

const CreateNewPassScreen = () => {
    const [showModal, setShowModal] = useState(false);
    const handleConfirm = () => {
        setShowModal(true);
    };

    return (
        <>
            <Screen
                style={styles.container}
                preset="scroll"
                customHeader={<Header title="Tạo mật khẩu mới" />}>
                <Input
                    label="Nhập mật khẩu mới"
                    secureTextEntry
                    style={styles.spaceHeader}
                />
                <BaseButton
                    title="Xác nhận"
                    style={styles.spaceButton}
                    onPress={handleConfirm}
                />
            </Screen>
            <ModalSuccess isVisible={showModal} />
        </>
    );
};

CreateNewPassScreen.navigationOption = {
    title: 'CreateNewPassScreen',
};

export default memo(CreateNewPassScreen);
