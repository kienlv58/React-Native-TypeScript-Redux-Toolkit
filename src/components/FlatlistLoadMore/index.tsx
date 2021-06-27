import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    FlatListProps,
    ListRenderItemInfo,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleProp,
    View,
    ViewStyle,
} from 'react-native';
import React, { ReactElement } from 'react';
import { get } from 'lodash';
import { palette } from 'theme';

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

const loader: StyleProp<ViewStyle> = {
    alignItems: 'center',
    marginTop: 10,
};

interface Props<T> extends Partial<FlatListProps<T>> {
    data: T[];
    renderItem: (info: ListRenderItemInfo<T>) => React.ReactElement | null;
    numColumns?: number;
    onEndReachedCustom?: () => void;
    onPullToRefresh?: () => void;
    isShowLoadMore?: boolean;
    refreshing?: boolean;
    flatListRef?: any;
}

function FlatListLoadMore<T>(props: Props<T>): ReactElement {
    const renderKeyExtractor = (item: T, index: number): string =>
        (get(item, 'orderid') || get(item, 'id') || index).toString();

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
            const currentOffset = nativeEvent.contentOffset.y;
            const direction = currentOffset > 0 ? 'down' : 'up';
            if (
                (!props.refreshing || !props.isShowLoadMore) &&
                direction === 'down'
            ) {
                props.onEndReachedCustom();
            }
            isDuringScroll = false;
        }
    };

    const renderFooter = () => (
        <View style={loader}>
            <ActivityIndicator size="large" color={palette.primary} />
        </View>
    );

    return (
        <FlatList
            {...props}
            ref={props.flatListRef}
            data={props.data}
            numColumns={props.numColumns}
            extraData={props.data}
            keyExtractor={renderKeyExtractor}
            // onEndReachedThreshold={0.5}
            // scrollEventThrottle={400}
            onScroll={handleOnScroll}
            onRefresh={props.onPullToRefresh}
            onMomentumScrollBegin={onMomentumScrollBegin}
            ListFooterComponent={props.isShowLoadMore ? renderFooter : null}
        />
    );
}

export default FlatListLoadMore;
