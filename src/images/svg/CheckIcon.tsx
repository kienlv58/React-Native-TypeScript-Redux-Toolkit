import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { palette } from 'theme';

interface Props {
    fillColor?: string;
    height?: number;
    width?: number;
}

const CheckIcon = ({
    height = 20,
    width = 20,
    fillColor = palette.title,
}: Props) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
        <Path
            d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0010 18zm-.997-4L4.76 9.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L9.003 14z"
            fill={fillColor}
        />
    </Svg>
);

export default CheckIcon;
