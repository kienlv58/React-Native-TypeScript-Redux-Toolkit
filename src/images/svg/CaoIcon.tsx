import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { palette } from 'theme';

interface Props {
    fillColor?: string;
    height?: number;
    width?: number;
}

const CaoIcon = ({
    height = 56,
    width = 56,
    fillColor = palette.title,
}: Props) => (
    <Svg width={width} height={height} viewBox="0 0 56 56" fill="none">
        <G clipPath="url(#prefix__clip0)" fill={fillColor}>
            <Path d="M51.788 40.408L10.145 33.14a8.585 8.585 0 10-1.56 17.027h36.578l1.515 4.03 4.368-1.642-.897-2.388h.947a4.904 4.904 0 00.692-9.76zM8.75 43.75a2.333 2.333 0 110-4.666 2.333 2.333 0 010 4.666zM27.27 29.086a7 7 0 009.016 4.09l2.184-.821 1.483 3.945 5.335.931-11.48-30.544a2.333 2.333 0 00-3.003-1.363l-4.37 1.641a7.008 7.008 0 00-4.09 9.016l4.926 13.105z" />
        </G>
        <Defs>
            <ClipPath id="prefix__clip0">
                <Path fill="#fff" d="M0 0h56v56H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default CaoIcon;
