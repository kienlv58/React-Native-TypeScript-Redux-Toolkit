import * as React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenProps } from './screen.props';
import { isNonScrolling, presets } from './screen.presets';

const isIos = Platform.OS === 'ios';

function ScreenWithoutScrolling(props: ScreenProps) {
    const insets = useSafeAreaInsets();
    const preset = presets.fixed;
    const {
        style,
        backgroundColor,
        unsafe,
        children,
        keyboardOffset,
        customHeader,
    } = props || {};
    const backgroundStyle = backgroundColor ? { backgroundColor } : {};
    const insetStyle = { paddingTop: unsafe ? 0 : insets.top };

    return (
        <KeyboardAvoidingView
            style={[preset.outer, backgroundStyle]}
            behavior={isIos ? 'padding' : undefined}
            keyboardVerticalOffset={keyboardOffset || 0}>
            <View style={[preset.inner, style, insetStyle]}>
                {customHeader}
                {children}
            </View>
        </KeyboardAvoidingView>
    );
}

function ScreenWithScrolling(props: ScreenProps) {
    const insets = useSafeAreaInsets();
    const preset = presets.scroll;
    const {
        style,
        backgroundColor,
        unsafe,
        children,
        keyboardOffset,
        customHeader,
    } = props || {};
    const backgroundStyle = backgroundColor ? { backgroundColor } : {};
    const insetStyle = { paddingTop: unsafe ? 0 : insets.top };

    return (
        <KeyboardAvoidingView
            style={[preset.outer, backgroundStyle]}
            behavior={isIos ? 'padding' : undefined}
            keyboardVerticalOffset={keyboardOffset || 0}>
            <View style={[preset.outer, backgroundStyle, insetStyle]}>
                {customHeader}
                <ScrollView
                    style={[preset.outer, backgroundStyle]}
                    contentContainerStyle={[preset.inner, style]}>
                    {children}
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}

/**
 * The starting component on every Screen in the app.
 *
 * @param props The Screen props
 */
const Screen = (props: ScreenProps) => {
    if (isNonScrolling(props.preset)) {
        return <ScreenWithoutScrolling {...props} />;
    }

    return <ScreenWithScrolling {...props} />;
};
export default Screen;
