import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { palette } from 'theme';

interface Props {
    fillColor?: string;
    height?: number;
    width?: number;
}

const SuccessIcon = ({
    height = 96,
    width = 96,
    fillColor = palette.title,
}: Props) => (
    <Svg width={width} height={height} viewBox="0 0 96 96" fill="none">
        <Path
            d="M72.582 31.406a2.812 2.812 0 00-3.977 0L41.382 58.629 27.395 44.642a2.812 2.812 0 10-3.977 3.977l15.975 15.976c.55.549 1.27.823 1.989.823.72 0 1.44-.274 1.989-.824l29.211-29.21a2.812 2.812 0 000-3.978z"
            fill={fillColor}
        />
        <Path
            d="M81.941 14.059C72.875 4.993 60.821 0 48 0 35.179 0 23.125 4.993 14.059 14.059 4.993 23.125 0 35.179 0 48c0 12.821 4.993 24.875 14.059 33.941C23.125 91.007 35.179 96 48 96c12.821 0 24.875-4.993 33.941-14.059C91.007 72.875 96 60.821 96 48c0-12.821-4.993-24.875-14.059-33.941zM48 90.375C24.634 90.375 5.625 71.365 5.625 48 5.625 24.634 24.635 5.625 48 5.625c23.366 0 42.375 19.01 42.375 42.375 0 23.366-19.01 42.375-42.375 42.375z"
            fill={fillColor}
        />
    </Svg>
);

export default SuccessIcon;
