module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "no-unused-vars": "off",
        "object-curly-spacing": [
            "error",
            "always",
            { objectsInObjects: false }
        ],
        "react/react-in-jsx-scope": "off",
        "react/no-unescaped-entities": "off",
        "no-trailing-spaces": "off",
        "react/prop-types": "off"
    }
};

