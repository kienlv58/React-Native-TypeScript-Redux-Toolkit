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

const EmptyListBookIcon = ({
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
                viewBox="0 0 121 154"
                fill="none">
                <Ellipse
                    cx={60.5}
                    cy={59.459}
                    rx={60.5}
                    ry={59.459}
                    fill="#F1F1F1"
                    fillOpacity={0.5}
                />
                <Rect
                    x={0.955}
                    y={1.041}
                    width={58.875}
                    height={81.228}
                    rx={7}
                    transform="matrix(.99984 .0429 -.04435 .99823 36.004 57.341)"
                    fill="#485064"
                    stroke="#C2C2C2"
                    strokeWidth={2}
                />
                <Rect
                    x={-1.125}
                    y={-0.863}
                    width={62.905}
                    height={85.185}
                    rx={9}
                    transform="matrix(.99173 -.12832 .13277 .99115 2.608 53.937)"
                    fill="#485064"
                    stroke="#C2C2C2"
                    strokeWidth={2}
                />
                <Path
                    d="M3.565 62.018a7.957 7.957 0 016.872-8.956L54.97 47.3c4.382-.567 8.41 2.523 8.996 6.902l1.478 11.034-60.402 7.816-1.478-11.034z"
                    fill="#383F50"
                />
                <Rect
                    width={2.496}
                    height={8.459}
                    rx={1.248}
                    transform="matrix(.13277 .99115 -.99173 .12832 76.04 48.767)"
                    fill="#DCDCDC"
                />
                <Rect
                    width={2.538}
                    height={8.318}
                    rx={1.269}
                    transform="matrix(.99173 -.12832 .13277 .99115 52.859 34.991)"
                    fill="#DCDCDC"
                />
                <Rect
                    width={2.517}
                    height={8.389}
                    rx={1.258}
                    transform="matrix(.8002 .60346 -.61402 .78644 67.732 37.26)"
                    fill="#DCDCDC"
                />
                <Rect
                    width={49.063}
                    height={3.327}
                    rx={1.664}
                    transform="matrix(.99173 -.12832 .13277 .99115 11.357 75.59)"
                    fill="#DCDCDC"
                />
                <Rect
                    width={49.063}
                    height={3.327}
                    rx={1.664}
                    transform="matrix(.99173 -.12832 .13277 .99115 13.566 92.08)"
                    fill="#DCDCDC"
                />
                <Rect
                    width={49.063}
                    height={3.327}
                    rx={1.664}
                    transform="matrix(.99173 -.12832 .13277 .99115 15.775 108.569)"
                    fill="#DCDCDC"
                />
                <Rect
                    width={17.764}
                    height={3.327}
                    rx={1.664}
                    transform="matrix(.99173 -.12832 .13277 .99115 12.24 82.186)"
                    fill="#EEE"
                />
                <Rect
                    width={17.764}
                    height={3.327}
                    rx={1.664}
                    transform="matrix(.99173 -.12832 .13277 .99115 14.45 98.675)"
                    fill="#EEE"
                />
                <Rect
                    width={17.764}
                    height={3.327}
                    rx={1.664}
                    transform="matrix(.99173 -.12832 .13277 .99115 16.659 115.165)"
                    fill="#EEE"
                />
            </Svg>
        </TouchableOpacity>
    );
};
export default React.memo(EmptyListBookIcon);
