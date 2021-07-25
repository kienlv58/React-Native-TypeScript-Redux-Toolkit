import { ViewStyle } from 'react-native';
import { isNil } from 'lodash';
import { palette } from 'theme';

/**
 * All Screen keyboard offsets.
 */
export const offsets = {
    none: 0,
};

/**
 * The variations of keyboard offsets.
 */
export type KeyboardOffsets = typeof offsets;

const outer1: ViewStyle = {
    backgroundColor: palette.primary,
    flex: 1,
    height: '100%',
};
const inner1: ViewStyle = {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '100%',
    width: '100%',
};

const outer2: ViewStyle = {
    backgroundColor: palette.primary,
    flex: 1,
    height: '100%',
};
const inner2: ViewStyle = {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
};
/**
 * All the variations of screens.
 */
export const presets = {
    /**
     * No scrolling. Suitable for full-Screen carousels and components
     * which have built-in scrolling like FlatList.
     */
    fixed: {
        outer: outer1,
        inner: inner1,
    },

    /**
     * Scrolls. Suitable for forms or other things requiring a keyboard.
     *
     * Pick this one if you don't know which one you want yet.
     */
    scroll: {
        outer: outer2,
        inner: inner2,
    },
};

/**
 * The variations of screens.
 */
export type ScreenPresets = keyof typeof presets;

/**
 * Is this preset a non-scrolling one?
 *
 * @param preset The preset to check
 */
export function isNonScrolling(preset?: ScreenPresets) {
    // any of these things will make you scroll
    return (
        isNil(preset) ||
        !preset.length ||
        isNil(presets[preset]) ||
        preset === 'fixed'
    );
}
