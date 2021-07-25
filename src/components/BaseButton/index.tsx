import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    TextStyle,
    StyleProp,
    ViewStyle,
    View,
} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: TextStyle;
    fitContent?: boolean;
}
export const BaseButton = (props: Props) => {
    if (props.fitContent) {
        return (
            <View style={styles.center}>
                <TouchableOpacity
                    {...props}
                    style={[props.style, styles.button]}>
                    <Text
                        style={[styles.title, props.textStyle]}
                        {...props.textStyle}>
                        {props.title}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <TouchableOpacity {...props} style={[props.style, styles.button]}>
            <Text style={[styles.title, props.textStyle]} {...props.textStyle}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

export const ButtonText = (props: Props) => (
    <View style={styles.center}>
        <TouchableOpacity {...props} style={[styles.buttonText, props.style]}>
            <Text
                style={[styles.titleGrey, props.textStyle]}
                {...props.textStyle}>
                {props.title}
            </Text>
        </TouchableOpacity>
    </View>
);
