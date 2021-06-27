import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import React from 'react';
import { Platform } from 'react-native';

interface Props {
    unitId?: string;
    size?: string;
}
const AppBannerAd = ({
    unitId = TestIds.BANNER,
    size = BannerAdSize.SMART_BANNER,
}: Props) => {
    if (Platform.OS == 'ios') {
        return <></>;
    }
    let adUnitId = unitId;
    if (__DEV__) {
        adUnitId = TestIds.BANNER;
    }
    return (
        <BannerAd
            unitId={adUnitId}
            size={size}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
            onAdLoaded={() => {
                console.log('Advert loaded');
            }}
            onAdFailedToLoad={(error) => {
                console.error('Advert failed to load: ', error);
            }}
        />
    );
};
export default AppBannerAd;
