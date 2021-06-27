module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'airbnb',
        'prettier',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    // parser: 'babel-eslint',
    // parser: '@babel/eslint-parser',
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
        env: {
            es6: true,
            node: true,
            browser: true,
            commonjs: true,
        },
        ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        allowImportExportEverywhere: true,
        experimentalObjectRestSpread: true,
        // project: './tsconfig.json',
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'no-use-before-define': 'off',
        camelcase: 'off',
        'import/extensions': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/no-multi-comp': 'off',
        '@typescript-eslint/semi': ['off'],
        'no-class-assign': 0,
        'no-param-reassign': 0,
        'class-methods-use-this': 0,
        'consistent-return': 0,
        'no-shadow': 0,
        'global-require': 0,
        eqeqeq: 0,
        'no-unused-expressions': [
            1,
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        'array-callback-return': 0,
        'no-console': [
            0,
            {
                allow: ['warn', 'error'],
            },
        ],
        'no-debugger': 1,
        'no-var': 1,
        'no-trailing-spaces': 1,
        'eol-last': 1,
        'no-underscore-dangle': 0,
        'no-alert': 0,
        'no-lone-blocks': 0,
        'jsx-quotes': 1,
        'no-multi-spaces': 1,
        'block-spacing': 1,
        'brace-style': 1,
        'comma-spacing': [
            1,
            {
                before: false,
                after: true,
            },
        ],
        'comma-style': 1,
        'no-multiple-empty-lines': [
            1,
            {
                max: 1,
            },
        ],
        'arrow-spacing': 1,
        'no-const-assign': 1,
        'object-curly-spacing': [1, 'always'],
        'space-before-blocks': [1, 'always'],
        indent: ['off'],
        'max-len': 0,
        'operator-linebreak': 0,
        'object-curly-newline': 0,
        'implicit-arrow-linebreak': 0,
        'prefer-promise-reject-errors': 0,
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/display-name': [
            0,
            {
                ignoreTranspilerName: false,
            },
        ],
        'react/forbid-prop-types': [
            1,
            {
                forbid: ['any'],
            },
        ],
        'react/desctructuring-assignment': 0,
        'react/jsx-curly-spacing': 1,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-indent-props': 0,
        'react/jsx-key': 1,
        'react/jsx-max-props-per-line': 0,
        'react/jsx-no-duplicate-props': 1,
        'react/jsx-no-literals': 0,
        'react/jsx-no-undef': 1,
        'react/jsx-pascal-case': 1,
        'react/jsx-sort-prop-types': 0,
        'react/jsx-sort-props': 0,
        'react/jsx-uses-vars': 1,
        'react/no-danger': 1,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-direct-mutation-state': 1,
        'react/no-set-state': 0,
        'react/no-unknown-property': 1,
        'react/prefer-es6-class': 1,
        'react/prop-types': 1,
        'react/react-in-jsx-scope': 1,
        'react/require-default-props': 0,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        'react/self-closing-comp': 1,
        'react/sort-comp': 1,
        'react/jsx-wrap-multilines': 0,
        'react/no-array-index-key': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'react/destructuring-assignment': 'off',
        'arrow-parens': 0,
        'import/no-unresolved': 'off', // Let typescript decide whether a module path is resolved
        'react/jsx-max-depth': ['error', { max: 6 }],
        'max-lines': [
            'error',
            { max: 350, skipBlankLines: true, skipComments: true },
        ],
        // 'max-lines-per-function': ['error', { max: 50 }],

        'keyword-spacing': [1, { before: true }],
        'key-spacing': [1, { afterColon: true }],
        'react/jsx-uses-react': 'error',
        'react-native/no-unused-styles': 1,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 0,
        'react-native/no-color-literals': 0,
        'no-unexpected-multiline': 1,
        'no-extra-boolean-cast': 1,
        semi: [1, 'always'],
        'no-undef-init': 2,
        'dot-notation': 1,
        'no-caller': 2,
        'no-eval': 2,
        'no-extend-native': 1,
        'no-implied-eval': 2,
        quotes: [1, 'single'],
        'prefer-arrow-callback': 1,
        'import/default': 0,
        'require-atomic-updates': 0,
        'space-infix-ops': 1,
        'space-unary-ops': 1,
        'no-mixed-spaces-and-tabs': 1,
        'react/jsx-props-no-spreading': 0,
        curly: 1,
    },
    globals: {
        after: true,
        afterEach: true,
        before: true,
        beforeEach: true,
        describe: true,
        xdescribe: true,
        it: true,
        xit: true,

        fetch: true,
        __DEV__: true,
    },
    settings: {
        'import/resolver': {
            'babel-module': {},
            node: {
                // paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};