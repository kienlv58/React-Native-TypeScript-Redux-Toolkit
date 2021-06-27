import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    fillColor?: string;
    height?: number;
    width?: number;
}

const TabHomeIcon = ({
    height = 28,
    width = 28,
    fillColor = '#7763F6',
}: Props) => (
    <Svg width={width} height={height} viewBox="0 0 23 26" fill="none">
        <Path
            d="M8.042 24.417V20.43c0-1.01.765-1.831 1.713-1.838h3.48c.951 0 1.723.823 1.723 1.838v3.975c0 .877.663 1.589 1.484 1.595h2.374c1.109.003 2.173-.464 2.958-1.3A4.602 4.602 0 0023 21.55V10.227c0-.955-.397-1.86-1.084-2.473L13.852.877c-1.41-1.203-3.423-1.164-4.79.092L1.17 7.753C.45 8.347.02 9.255 0 10.226v11.313C0 24.003 1.873 26 4.184 26h2.32c.395.003.775-.162 1.056-.46.281-.297.44-.701.44-1.123h.042z"
            fill={fillColor}
        />
    </Svg>
);

export default TabHomeIcon;
