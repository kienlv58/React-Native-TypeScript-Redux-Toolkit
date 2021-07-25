import {
    TextInput,
    TextInputProps,
    View,
    Text,
    ViewStyle,
    StyleProp,
    TextStyle,
} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props extends TextInputProps {
    label: string;
    placeHolder?: string;
    value?: string;
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
}
const Input = (props: Props) => (
    <View style={props.style}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput {...props} style={[styles.input, props.inputStyle]} />
    </View>
);
export default Input;
