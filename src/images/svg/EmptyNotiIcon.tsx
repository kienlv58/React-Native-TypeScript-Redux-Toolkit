import React from 'react';
import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import Svg, { Ellipse, Mask, Path } from 'react-native-svg';
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

const EmptyNotiIcon = ({
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
                viewBox="0 0 146 133"
                fill="none">
                <Ellipse
                    cx={84.663}
                    cy={58.544}
                    rx={60.562}
                    ry={58.544}
                    fill="#F1F1F1"
                    fillOpacity={0.5}
                />
                <Path
                    d="M74.516 36.398l.437.244.257-.43 1.601-2.681c2.183-3.654 6.965-4.935 10.681-2.86a7.438 7.438 0 012.778 10.37l-1.602 2.683-.256.43.436.243c12.895 7.197 17.21 23.308 9.638 35.986l-16.254 27.215a7.224 7.224 0 002.698 10.073.866.866 0 01.323 1.207l-4.772 7.99a1.553 1.553 0 01-2.08.557L2.004 84.785a1.448 1.448 0 01-.54-2.018l4.682-7.84a1.11 1.11 0 011.485-.398l.737.411c3.623 2.023 8.285.774 10.413-2.788L33.586 47.36c8.364-14.003 26.689-18.91 40.93-10.962z"
                    fill="#485064"
                    stroke="#BFBFBF"
                />
                <Mask id="prefix__a" fill="#fff">
                    <Path d="M45.293 111.877a10.575 10.575 0 00-1.126 8.265c.774 2.791 2.662 5.17 5.25 6.614a11.608 11.608 0 008.55 1.088c2.886-.748 5.347-2.573 6.841-5.075l-9.757-5.446-9.758-5.446z" />
                </Mask>
                <Path
                    d="M45.293 111.877a10.575 10.575 0 00-1.126 8.265c.774 2.791 2.662 5.17 5.25 6.614a11.608 11.608 0 008.55 1.088c2.886-.748 5.347-2.573 6.841-5.075l-9.757-5.446-9.758-5.446z"
                    fill="#CCC"
                    stroke="#999"
                    strokeWidth={2}
                    mask="url(#prefix__a)"
                />
                <Ellipse
                    cx={42.763}
                    cy={15.998}
                    rx={4.577}
                    ry={4.425}
                    fill="#BFBFBF"
                />
                <Path
                    d="M120.781 71.138c0 2.152-1.809 3.925-4.077 3.925s-4.077-1.773-4.077-3.925 1.809-3.925 4.077-3.925 4.077 1.773 4.077 3.925zM16.559 60.246c0 2.152-1.81 3.925-4.077 3.925-2.268 0-4.078-1.773-4.078-3.925s1.81-3.925 4.078-3.925c2.268 0 4.077 1.773 4.077 3.925z"
                    stroke="#BFBFBF"
                />
            </Svg>
        </TouchableOpacity>
    );
};
export default React.memo(EmptyNotiIcon);
