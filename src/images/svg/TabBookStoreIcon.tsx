import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    fillColor?: string;
    height?: number;
    width?: number;
}

const TabBookStoreIcon = ({
    height = 28,
    width = 28,
    fillColor = '#7763F6',
}: Props) => (
    <Svg width={width} height={height} viewBox="0 0 23 26" fill="none">
        <Path
            opacity={0.4}
            d="M11.487 21.608l-9.332 4.215c-.704.346-1.583.115-1.977-.52A1.31 1.31 0 010 24.658V15.22c0 .936.583 1.513 2.117 2.16l9.37 4.227z"
            fill={fillColor}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.037 0h8.875c3.893 0 7.05 1.386 7.088 4.931v19.726c-.002.222-.063.44-.177.635a1.438 1.438 0 01-.885.656c-.38.1-.788.055-1.131-.125l-9.32-4.215-9.37-4.227C.583 16.734 0 16.157 0 15.221V4.931C0 1.386 3.157 0 7.037 0zm-.964 9.909H16.89c.623 0 1.128-.46 1.128-1.028 0-.568-.505-1.028-1.128-1.028H6.073c-.623 0-1.128.46-1.128 1.028 0 .568.505 1.028 1.128 1.028z"
            fill={fillColor}
        />
    </Svg>
);

export default TabBookStoreIcon;
