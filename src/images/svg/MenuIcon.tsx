import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { palette } from 'theme';

interface Props {
    fillColor?: string;
    height?: number;
    width?: number;
}

const MenuIcon = ({
    height = 24,
    width = 24,
    fillColor = palette.title,
}: Props) => (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
            d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"
            fill={fillColor}
        />
    </Svg>
);

export default MenuIcon;
