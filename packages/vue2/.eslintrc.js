
module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    env: {
        node: true // 添加这行来允许使用 require
    },
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