module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.jsx', 'cypress/**/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
      plugins: ['react', 'import', 'react-hooks', 'cypress'],
      extends: [
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:cypress/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx'],
          },
        },
        'import/extensions': ['.js', '.jsx'],
      },
      rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'no-var': 'error',
        'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'no-magic-numbers': [
          'off',
          { ignore: [], ignoreArrayIndexes: true, enforceConst: true, detectObjects: false },
        ],
        'array-bracket-newline': ['off', 'consistent'],
        'array-element-newline': ['off', { multiline: true, minItems: 3 }],
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
        'max-len': [
          'error',
          100,
          2,
          {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'prefer-template': 'error',
        'prefer-spread': 'error',
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'off',
        'import/order': 'error',
        'import/default': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'jsx-quotes': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-boolean-value': ['error', 'never', { always: [] }],
        'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
        'react/jsx-indent-props': ['error', 2],
        'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
        'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
        'react/jsx-uses-react': ['error'],
        'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
        'react/self-closing-comp': 'error',
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        'react/jsx-indent': ['error', 2],
        'react/no-array-index-key': 'error',
        'react/no-typos': 'error',
        'react/destructuring-assignment': ['error', 'always'],
        'react/react-in-jsx-scope': 'off',
        'prefer-destructuring': [
          'error',
          {
            VariableDeclarator: {
              array: false,
              object: true,
            },
            AssignmentExpression: {
              array: true,
              object: false,
            },
          },
          {
            enforceForRenamedProperties: false,
          },
        ],
        'arrow-body-style': [
          'error',
          'as-needed',
          {
            requireReturnForObjectLiteral: false,
          },
        ],
      },
    },
  ],
};
