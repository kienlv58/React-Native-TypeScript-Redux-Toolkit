import React from 'react';
import { View } from 'react-native';
import Screen from 'components/Screen';
import Header from 'components/Header';
import EmptyNotiIcon from 'images/svg/EmptyNotiIcon';
import Text from 'components/Text';
import { useBackButton } from '../useBackButton';

const Notification = () => {
    useBackButton();
    return (
        <Screen
            preset="fixed"
            customHeader={<Header title="Thông báo" isHideBack />}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <EmptyNotiIcon width={100} height={100} />
                <Text text="Không có thông báo nào" style={{ marginTop: 10 }} />
            </View>
        </Screen>
    );
};

export default Notification;
