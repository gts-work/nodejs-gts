module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: ["standard"],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        "comma-dangle": "off",
        "space-before-function-paren": "off",
        "max-len": "off",
        "require-jsdoc": "off",
        indent: "off",
        quotes: ["error", "double"],
        semi: ["error", "always"],
    },
};
