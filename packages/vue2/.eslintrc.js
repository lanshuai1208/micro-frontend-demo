
module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        "@vue/typescript/recommended",
        "plugin:prettier/recommended"
    ],
    rules: {
        'prettier/prettier': 0,
        "vue/multi-word-component-names": 0,
        "vue/component-definition-name-casing": 0
    }
}