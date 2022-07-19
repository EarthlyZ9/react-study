module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        semi: ['error', 'always'],
        'no-unused-vars': 'off',
        'object-curly-spacing': [
            'error',
            'always',
            { objectsInObjects: false },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 0,
        'no-useless-return': 'off',
    },
};
