import React from 'react';
import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import Svg, { Ellipse, Path, Rect } from 'react-native-svg';
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

const SearchEmptyIcon = ({
    containerStyles,
    height = 24,
    onClick = noop,
    width = 24,
}: Props) => {
    const handleClick = (): void => {
        onClick && onClick();
    };
    return (
        <TouchableOpacity
            activeOpacity={onClick === noop ? 1 : 0.5}
            onPress={handleClick}
            style={[styles.container, containerStyles]}>
            <Svg
                width={width}
                height={height}
                viewBox="0 0 135 124"
                fill="none">
                <Ellipse
                    cx={61.458}
                    cy={61.087}
                    rx={61.458}
                    ry={61.087}
                    fill="#F1F1F1"
                    fillOpacity={0.5}
                />
                <Path
                    d="M96.705 61.191c0 19.616-16 35.528-35.75 35.528s-35.75-15.912-35.75-35.528 16-35.528 35.75-35.528 35.75 15.912 35.75 35.528z"
                    fill="#485064"
                    stroke="#BFBFBF"
                    strokeWidth={2}
                />
                <Path
                    d="M86.205 61.191c0 13.852-11.299 25.092-25.25 25.092-13.95 0-25.25-11.24-25.25-25.092 0-13.852 11.3-25.092 25.25-25.092 13.951 0 25.25 11.24 25.25 25.092z"
                    fill="#1D212B"
                    stroke="#BFBFBF"
                    strokeWidth={2}
                />
                <Path
                    d="M60.955 42.009a.676.676 0 00-.694-.682 20.06 20.06 0 00-12.97 5.353 19.833 19.833 0 00-6.23 12.501.68.68 0 00.638.742.72.72 0 00.755-.649 18.448 18.448 0 015.79-11.581 18.66 18.66 0 0112.017-4.978.714.714 0 00.694-.706z"
                    fill="#DADADA"
                />
                <Rect
                    x={-1.418}
                    width={12.244}
                    height={36.147}
                    rx={6.122}
                    transform="scale(1.00302 .99697) rotate(-45 164.51 -58.377)"
                    fill="#485064"
                    stroke="#BFBFBF"
                    strokeWidth={2}
                />
                <Rect
                    width={1.663}
                    height={13.946}
                    rx={0.832}
                    transform="scale(1.00302 .99697) rotate(-45 175.104 -70.703)"
                    fill="#fff"
                />
                <Path
                    fill="#BFBFBF"
                    d="M87.717 91.496l1.21-1.204 4.844 4.814-1.21 1.204z"
                />
                <Rect
                    x={105.887}
                    y={56.905}
                    width={17.125}
                    height={1.702}
                    rx={0.851}
                    fill="#DADADA"
                />
                <Rect
                    y={70.986}
                    width={17.125}
                    height={1.702}
                    rx={0.851}
                    fill="#DADADA"
                />
                <Rect
                    x={126.438}
                    y={56.905}
                    width={8.563}
                    height={1.702}
                    rx={0.851}
                    fill="#C4C4C4"
                />
                <Rect
                    x={110.169}
                    y={63.15}
                    width={8.563}
                    height={1.702}
                    rx={0.851}
                    fill="#DADADA"
                />
                <Rect
                    x={4.281}
                    y={77.231}
                    width={8.563}
                    height={1.702}
                    rx={0.851}
                    fill="#DADADA"
                />
            </Svg>
        </TouchableOpacity>
    );
};
export default React.memo(SearchEmptyIcon);
