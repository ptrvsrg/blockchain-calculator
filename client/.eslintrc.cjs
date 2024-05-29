module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended",
    "plugin:perfectionist/recommended-natural",
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    "import",
    "react-refresh",
    "perfectionist",
    "prettier",
  ],
  rules: {
    "prettier/prettier": ["warn", {endOfLine: "auto"}],

    "no-console": "off",
    "no-debugger": "warn",

    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    'import/extensions': 'off',
    "perfectionist/sort-classes": "off",

    "@typescript-eslint/semi": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-param-reassign": "off",
    "@typescript-eslint/no-unused-vars": [
        "error",
        {
            args: "none",
            ignoreRestSiblings: true,
        },
    ],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-use-before-define": "off",

    "getter-return": ["warn", {allowImplicit: true}],
    "class-methods-use-this": "off",
    "max-lines": ["warn", 1000],
    "no-restricted-exports": ["error",
        {restrictDefaultExports: {defaultFrom: false}}],
    "max-len": ["error", {code: 120}],
    "object-curly-newline": "off",
    "arrow-body-style": "off",
    "operator-linebreak": "off",
    "implicit-arrow-linebreak": "off",
    "no-param-reassign": "off",
  },
}
