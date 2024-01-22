module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: [
    '/report/coverage/**/*'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'prettier/prettier': 'off',
        'quotes': 'off',
        'comma-dangle': 'off',
        'semi': 'off',
        'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
        'no-dupe-class-members': 'off',
        'dot-notation': 'off',
      },
    },
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      excludedFiles: ['src/**/*test.ts', 'src/**/*test.tsx'],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      rules: {
        '@typescript-eslint/no-floating-promises': 'error',
      },
    },
  ],
};
