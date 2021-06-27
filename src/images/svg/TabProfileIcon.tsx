import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    fillColor?: string;
    height?: number;
    width?: number;
}

const TabProfileIcon = ({
    height = 28,
    width = 28,
    fillColor = '#7763F6',
}: Props) => (
    <Svg width={width} height={height} viewBox="0 0 23 26" fill="none">
        <Path
            d="M11.5 17.128c-6.202 0-11.5.884-11.5 4.42C0 25.084 5.265 26 11.5 26c6.202 0 11.5-.883 11.5-4.42s-5.263-4.452-11.5-4.452z"
            fill={fillColor}
        />
        <Path
            opacity={0.4}
            d="M11.5 13.76c4.225 0 7.61-3.062 7.61-6.88S15.725 0 11.5 0C7.276 0 3.89 3.062 3.89 6.88s3.386 6.88 7.61 6.88z"
            fill={fillColor}
        />
    </Svg>
);

export default TabProfileIcon;
