import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'react-native';
import Screen from 'components/Screen';
import globalStyles from 'theme/global-style';
import { BaseButton } from 'components/BaseButton';
import { useNavigation } from '@react-navigation/core';
import { ScreenMap } from 'constants/screens';
import { NavigationScreenProps } from 'screen-type';
import IconButtonText from 'components/IconButtonText';
import UnCheckIcon from 'images/svg/UnCheckIcon';
import CheckIcon from 'images/svg/CheckIcon';
import styles from './styles';

const WhoAreYouScreen = () => {
    const navigation = useNavigation();

    const [checkType, setCheckType] = useState<number>(1);

    return (
        <Screen style={styles.container} preset="scroll">
            <Text style={[globalStyles.title, styles.spaceHeader]}>
                Bạn là ai
            </Text>
            <IconButtonText
                leftIcon={checkType == 1 ? <CheckIcon /> : <UnCheckIcon />}
                title="Tôi cần cắt tóc"
                onPress={() => {
                    setCheckType(1);
                }}
                style={styles.spaceForm}
            />
            <IconButtonText
                leftIcon={checkType == 2 ? <CheckIcon /> : <UnCheckIcon />}
                title="Tôi là thợ cắt tóc"
                onPress={() => {
                    setCheckType(2);
                }}
                style={styles.spaceForm}
            />
            <BaseButton
                title="Xác nhận"
                style={styles.spaceButton}
                onPress={() => {
                    navigation.navigate(ScreenMap.USER_INFO_SCREEN, {
                        type: checkType,
                    });
                }}
            />
        </Screen>
    );
};

export default memo(WhoAreYouScreen);
