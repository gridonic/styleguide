module.exports = {
    extends: [

        // @see https://www.npmjs.com/package/eslint-config-airbnb-base
        'airbnb-base',

        // @see https://github.com/vuejs/eslint-plugin-vue
        // @see https://vuejs.github.io/eslint-plugin-vue/rules/
        'plugin:vue/recommended'

    ],

    // @see https://eslint.org/docs/user-guide/configuring#specifying-environments
    env: {
        browser: true
    },

    // @see https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    parserOptions: {
        ecmaVersion: 6,
        parser: 'babel-eslint',
        sourceType: 'module'
    },

    // @see https://www.npmjs.com/package/eslint-import-resolver-webpack
    settings: {
        'import/resolver': 'webpack'
    },
    rules: {
        indent: ['error', 4, { 'SwitchCase': 1 }],
        'class-methods-use-this': 0,
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'state', // for vuex state
                'acc', // for reduce accumulators
                'e' // for e.returnvalue
            ]
        }],
        'vue/html-indent': ["error", 4],
        "no-console": 0,
        // 'vue/script-indent': ["error", 4, {
        //     "baseIndent": 1,
        //     "switchCase": 0,
        //     "ignores": []
        // }]
    }
};
