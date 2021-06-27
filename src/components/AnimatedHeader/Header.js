/* eslint-disable*/
import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Animated, Platform, StyleSheet, View } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

const ios = Platform.OS === 'ios';
const initToolbarHeight = ios ? 46 : 56;
const iphoneXTopInset = getStatusBarHeight();

let paddingTop = 18;
if (ios && isIphoneX()) paddingTop = 0;
if (!ios) paddingTop = 10;
// const paddingTop = 0;
const topInset = isIphoneX() ? iphoneXTopInset : 0;

const toolbarHeight = initToolbarHeight + topInset + paddingTop;

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.headerHeight = props.headerMaxHeight;
        this.state = {
            scrollOffset: new Animated.Value(0),
            left: 0,
            bottom: 0,
        };
    }

    onScroll = (e) => {
        if (this.props.disabled) {
            return;
        }
        this.state.scrollOffset.setValue(e.nativeEvent.contentOffset.y);
    };

    onBackLayout = (e) => {
        const { layout } = e.nativeEvent;
        const bottom =
            toolbarHeight - layout.y - layout.height - paddingTop - topInset;
        this.setState({ bottom, left: e.nativeEvent.layout.x });
    };

    _getFontSize = () => {
        const { scrollOffset } = this.state;
        const backFontSize =
            this.props.backTextStyle.fontSize ||
            Header.defaultProps.backTextStyle.fontSize;
        const titleFontSize =
            this.props.titleStyle.fontSize ||
            Header.defaultProps.titleStyle.fontSize;
        return scrollOffset.interpolate({
            inputRange: [0, this.headerHeight - toolbarHeight],
            outputRange: [titleFontSize, backFontSize],
            extrapolate: 'clamp',
        });
    };

    _getLeft = () => {
        const { scrollOffset } = this.state;
        const left =
            this.props.titleStyle.left || Header.defaultProps.titleStyle.left;
        return scrollOffset.interpolate({
            inputRange: [0, this.headerHeight - toolbarHeight],
            outputRange: [left, this.state.left],
            extrapolate: 'clamp',
        });
    };

    _getHeight = () => {
        const { scrollOffset } = this.state;
        return scrollOffset.interpolate({
            inputRange: [0, this.headerHeight - toolbarHeight],
            outputRange: [this.headerHeight, toolbarHeight],
            extrapolate: 'clamp',
        });
    };

    _getBottom = () => {
        const { scrollOffset } = this.state;
        const bottom =
            this.props.titleStyle.bottom ||
            Header.defaultProps.titleStyle.bottom;
        return scrollOffset.interpolate({
            inputRange: [0, this.headerHeight - toolbarHeight],
            outputRange: [bottom, this.state.bottom],
            extrapolate: 'clamp',
        });
    };

    _getOpacity = () => {
        const { scrollOffset } = this.state;
        return this.props.backText
            ? scrollOffset.interpolate({
                  inputRange: [0, this.headerHeight - toolbarHeight],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
              })
            : 0;
    };

    _getOpacityReverse = () => {
        const { scrollOffset } = this.state;
        return this.props.backText
            ? scrollOffset.interpolate({
                  inputRange: [0, this.headerHeight + toolbarHeight],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
              })
            : 0;
    };

    _getImageOpacity = () => {
        const { scrollOffset } = this.state;
        return this.props.imageSource
            ? scrollOffset.interpolate({
                  inputRange: [0, this.headerHeight - toolbarHeight],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
              })
            : 0;
    };

    _getImageScaleStyle = () => {
        if (!this.props.parallax) {
            return undefined;
        }
        const { scrollOffset } = this.state;
        const scale = scrollOffset.interpolate({
            inputRange: [-100, -0],
            outputRange: [1.5, 1],
            extrapolate: 'clamp',
        });

        return {
            transform: [
                {
                    scale,
                },
            ],
        };
    };

    render() {
        const {
            imageSource,
            toolbarColor,
            titleStyle,
            backTextStyle,
        } = this.props;
        const height = this._getHeight();
        // const left = this._getLeft();
        // const bottom = this._getBottom();
        const opacity = this._getOpacity();
        const opacityReverse = this._getOpacityReverse();
        const fontSize = this._getFontSize();
        // const headerStyle = this.props.noBorder
        //     ? undefined
        //     : { borderBottomWidth: 1, borderColor: '#a7a6ab' };

        return (
            <Animated.View
                style={[
                    styles.header,
                    {
                        height,
                        backgroundColor: toolbarColor,
                    },
                ]}>
                {imageSource && (
                    <Animated.Image
                        blurRadius={28}
                        style={[
                            StyleSheet.absoluteFill,
                            // { width: null, height: null, opacity: imageOpacity },
                            { width: null, height: null, opacity: 1 },
                            this._getImageScaleStyle(),
                        ]}
                        source={imageSource}
                        resizeMode="cover"
                    />
                )}
                {Platform.OS === 'android' ? (
                    <View
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            top: 0,
                            backgroundColor: 'rgba(0,0,0,0.4)',
                        }}
                    />
                ) : (
                    <BlurView
                        style={[styles.overrideBlur]}
                        blurType="dark"
                        blurAmount={10}
                        reducedTransparencyFallbackColor="white"
                    />
                )}
                <View style={styles.toolbarContainer}>
                    <View style={styles.statusBar} />
                    <View style={styles.toolbar}>
                        {this.props.renderLeft && this.props.renderLeft()}
                        <View style={[{ flex: 1, marginRight: 40 }]}>
                            <Animated.Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={[
                                    backTextStyle,
                                    { alignSelf: 'center', opacity },
                                ]}>
                                {this.props.title}
                            </Animated.Text>
                        </View>
                        {this.props.renderRight && this.props.renderRight()}
                    </View>
                </View>
                <Animated.View
                    style={[
                        titleStyle,
                        {
                            position: 'absolute',
                            left: 20,
                            bottom: 10,
                            top: toolbarHeight,
                            right: 0,
                            fontSize,
                            opacity: opacityReverse,
                        },
                    ]}>
                    {this.props.renderContent()}
                </Animated.View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    toolbarContainer: {
        height: toolbarHeight,
    },
    statusBar: {
        height: topInset + paddingTop,
    },
    toolbar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    titleButton: {
        flexDirection: 'row',
    },
    flexView: {
        flex: 1,
    },
    overrideBlur: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // backgroundColor:'rgba(0,0,0,0.1)'
    },
});

Header.defaultProps = {
    backText: '',
    title: '',
    renderLeft: undefined,
    renderRight: undefined,
    backStyle: { marginLeft: 10 },
    backTextStyle: { fontSize: 16 },
    titleStyle: { fontSize: 20, left: 40, bottom: 30 },
    toolbarColor: '#FFF',
    headerMaxHeight: 200,
    disabled: false,
    imageSource: undefined,
};
