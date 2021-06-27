import { TextStyle } from 'react-native';
import { palette, typography } from 'theme';

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
    fontFamily: typography.primary,
    color: palette.textColor,
    fontSize: 15,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
    /**
     * The default text styles.
     */
    default: BASE,

    /**
     * A bold version of the default text.
     */
    bold: { ...BASE, fontWeight: 'bold' },

    textGrey: { ...BASE, color: palette.textColorGrey },

    /**
     * Large headers.
     */
    header: { ...BASE, fontSize: 24, fontWeight: 'bold' },

    /**
     * Field labels that appear on forms above the inputs.
     */
    fieldLabel: {
        ...BASE,
        fontSize: 13,
        color: palette.lighterGrey,
    },

    /**
     * A smaller piece of secondard information.
     */
    secondary: {
        ...BASE,
        fontSize: 9,
        color: palette.lighterGrey,
    },
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets;
