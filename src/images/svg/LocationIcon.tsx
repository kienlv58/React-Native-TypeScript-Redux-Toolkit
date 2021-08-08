import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { palette } from 'theme';

interface Props {
    fillColor?: string;
    height?: number;
    width?: number;
}

const LocationIcon = ({
    height = 16,
    width = 16,
    fillColor = palette.title,
}: Props) => (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
        <Path
            d="M8 13.933l3.3-3.3a4.666 4.666 0 10-6.6 0l3.3 3.3zm0 1.886l-4.243-4.243a6 6 0 118.486 0L8 15.82zm0-7.152A1.333 1.333 0 108 6a1.333 1.333 0 000 2.667zM8 10a2.667 2.667 0 110-5.333A2.667 2.667 0 018 10z"
            fill="#E4E4E4"
        />
    </Svg>
);

export default LocationIcon;
