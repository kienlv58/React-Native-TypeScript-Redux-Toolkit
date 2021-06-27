import {
    Dimensions,
    FlatListProps,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
} from 'react-native';
import React, { ReactElement, ReactNode } from 'react';

const screenHeight = Dimensions.get('screen').height;
let isDuringScroll = false;
const loadingMoreWhenMarginBottom = screenHeight / 3;

/**
 * ScrollView listen onEndReach
 */
const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
}: NativeScrollEvent): boolean =>
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - loadingMoreWhenMarginBottom;

const isCloseToTop = ({ contentOffset }: NativeScrollEvent): boolean =>
    contentOffset.y < 0;

interface Props<T> extends Partial<FlatListProps<T>> {
    onEndReachedCustom?: () => void;
    onEndRefreshCustom?: () => void;
    children: ReactNode;
    scrollEnabled?: boolean;
}
function ScrollViewLoadMore<T>(props: Props<T>, ref: any): ReactElement {
    const onMomentumScrollBegin = (): void => {
        isDuringScroll = true;
    };

    const handleOnScroll = ({
        nativeEvent,
    }: NativeSyntheticEvent<NativeScrollEvent>): void => {
        if (
            props.onEndReachedCustom &&
            isCloseToBottom(nativeEvent) &&
            isDuringScroll
        ) {
            props.onEndReachedCustom();
            isDuringScroll = false;
        }

        if (
            props.onEndRefreshCustom &&
            isCloseToTop(nativeEvent) &&
            isDuringScroll
        ) {
            props.onEndRefreshCustom();
            isDuringScroll = false;
        }
    };

    return (
        <ScrollView
            onScroll={handleOnScroll}
            ref={ref}
            keyboardShouldPersistTaps="handled"
            scrollEventThrottle={400}
            onMomentumScrollBegin={onMomentumScrollBegin}
            scrollEnabled={props.scrollEnabled}
            // refreshControl={
            //   <RefreshControl
            //     refreshing={refreshing}
            //     onRefresh={() => {
            //       console.log('onRefresh');
            //       setRefreshing(true);
            //       setTimeout(() => setRefreshing(false), 500);
            //     }}
            //   />
            // }
            {...props}>
            {props.children}
        </ScrollView>
    );
}

export default React.forwardRef(ScrollViewLoadMore);
