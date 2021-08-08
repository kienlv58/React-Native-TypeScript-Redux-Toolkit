import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { palette } from 'theme';

interface Props {
    fillColor?: string;
    height?: number;
    width?: number;
}

const UnCheckIcon = ({
    height = 20,
    width = 20,
    fillColor = palette.white,
}: Props) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
        <Circle
            opacity={0.4}
            cx={10}
            cy={10}
            r={9}
            stroke={fillColor}
            strokeWidth={2}
        />
    </Svg>
);

export default UnCheckIcon;
