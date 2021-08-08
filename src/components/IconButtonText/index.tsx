import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    ViewStyle,
    TextStyle,
} from 'react-native';
import styles from './styles';

interface Props {
    title: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    style?: ViewStyle;
    textStyle?: TextStyle;
    onPress?: () => void;
}

const IconButtonText = (props: Props) => (
    <TouchableOpacity
        activeOpacity={0.8}
        style={props.style}
        onPress={props.onPress}>
        <View style={styles.wrapper}>
            {props?.leftIcon}
            <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
            {props?.rightIcon}
        </View>
    </TouchableOpacity>
);

export default IconButtonText;
