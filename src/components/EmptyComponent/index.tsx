import Text from 'components/Text';
import { View } from 'react-native';
import React from 'react';
import EmptyListBookIcon from 'images/svg/EmptyListBookIcon';
import styles from './styles';

const EmptyComponent = () => (
    <View style={styles.wrapper}>
        <EmptyListBookIcon width={100} height={100} />
        <Text text="Không có dữ liệu" style={styles.text} />
    </View>
);
export default EmptyComponent;
