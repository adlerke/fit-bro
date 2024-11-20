module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react-native-a11y/all',

    // Available through @react-native-community/eslint-config
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: [
        'src/data/**/*.ts',
        'src/domain/**/*.ts',
        'src/injection-container/**/*.ts',
        'src/presentation/**/*.ts',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['import'],
      extends: [
        '@react-native-community',
        'plugin:react-native-a11y/all',
        'plugin:import/recommended',
        'plugin:import/typescript',
        // Available through @react-native-community/eslint-config
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            moduleDirectory: ['node_modules', 'src/'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        // These rules are difficult to maintain, so they've been defined as warnings instead of errors
        '@typescript-eslint/no-empty-function': 1,
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react-hooks/exhaustive-deps': 1,

        // Goes against iOS recommendations
        'react-native-a11y/has-accessibility-hint': 'off',

        // Define as errors so that Husky can prevent commits that trigger these rules
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'prefer-const': 'error',
        'no-bitwise': 'error',
        'no-var': 'error',

        // Misc
        'no-undef': 'off',
        'import/no-unresolved': 'error',
        'import/namespace': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: '@(react|react-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '~/**',
                group: 'internal',
              },
              {
                pattern: '#/**',
                group: 'internal',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  env: {
    'jest/globals': true,
  },
  ignorePatterns: ['node_modules/', 'coverage/'],
  rules: {
    // These rules are difficult to maintain, so they've been defined as warnings instead of errors
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 1,
    'no-shadow': 'off',

    // Goes against iOS recommendations
    'react-native-a11y/has-accessibility-hint': 'off',

    // Define as errors so that Husky can prevent commits that trigger these rules
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'prefer-const': 'error',
    'no-bitwise': 'error',
    'no-var': 'error',

    // Misc
    'no-undef': 'off',
  },
};
