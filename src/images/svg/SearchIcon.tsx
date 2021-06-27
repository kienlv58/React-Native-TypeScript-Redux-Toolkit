import React from 'react';
import {
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    StyleSheet,
} from 'react-native';
import Svg, { Ellipse, Path } from 'react-native-svg';
import { noop } from 'lodash';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

interface Props {
    containerStyles?: StyleProp<ViewStyle>;
    height?: number;
    onClick?: () => void;
    width?: number;
}

const SearchIcon = ({
    containerStyles,
    height = 16,
    onClick = noop,
    width = 16,
}: Props) => {
    const handleClick = (): void => {
        onClick && onClick();
    };
    return (
        <TouchableOpacity
            activeOpacity={onClick === noop ? 1 : 0.5}
            onPress={handleClick}
            style={[styles.container, containerStyles]}>
            <Svg width={width} height={height} fill="none" viewBox="0 0 17 17">
                <Ellipse
                    cx={8.185}
                    cy={8.014}
                    rx={7.185}
                    ry={7.014}
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M13.183 13.257L16 16"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </TouchableOpacity>
    );
};
export default SearchIcon;
