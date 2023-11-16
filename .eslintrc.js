module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:destructuring/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
  },
  plugins: [
    '@typescript-eslint',
    'destructuring',
    'import',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks'
  ],
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/no-unused-vars': 2,
    'accessor-pairs': [2, {
      enforceForClassMembers: true,
      getWithoutSet: true,
      setWithoutGet: true
    }],
    'array-callback-return': [2, { allowImplicit: true, checkForEach: true }],
    'arrow-body-style': [2, 'as-needed'],
    'block-scoped-var': 2,
    'camelcase': [2, { properties: 'never', ignoreDestructuring: true }],
    'capitalized-comments': [2, 'never'],
    'curly': 2,
    'default-case': 2,
    'default-case-last': 2,
    'destructuring/no-rename': 1,
    'dot-notation': [2, { allowKeywords: true }], // this rule skips reserved words, read the settings
    'eqeqeq': [2, 'always'],
    'func-names': [1, 'as-needed'],
    'grouped-accessor-pairs': 2,
    'guard-for-in': 1,
    'import/named': 0,
    'import/no-unresolved': 0,
    'import/order': [2, {
      alphabetize: { caseInsensitive: true, order: 'asc' },
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
        'type',
        'unknown'
      ],
      'newlines-between': 'never',
      pathGroups: [
        {
          pattern: 'react',
          group: 'external',
          position: 'before'
        }
      ],
      pathGroupsExcludedImportTypes: ['react'],
    }],
    'lines-between-class-members': [2, 'always'],
    'logical-assignment-operators': [2, 'always', { enforceForIfStatements: true }],
    'max-classes-per-file': [2, 1],
    'max-depth': [1, 3],
    'max-lines': [1, { max: 150, skipComments: false }],
    'max-nested-callbacks': 1,
    'multiline-comment-style': [2, 'separate-lines', { checkJSDoc: true }],
    'new-cap': 2,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-await-in-loop': 2,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-console': 2,
    'no-constant-binary-expression': 2,
    'no-constructor-return': 2,
    'no-div-regex': 1,
    'no-duplicate-imports': [2, { includeExports: true }],
    'no-empty-static-block': 2,
    'no-eq-null': 2,
    'no-extra-label': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-mixed-operators': 2,
    'no-multi-assign': [2, { ignoreNonDeclaration: false }],
    'no-negated-condition': 2,
    'no-new': 2,
    'no-new-func': 1,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-promise-executor-return': 2,
    'no-proto': 2,
    'no-self-compare': 2,
    'no-template-curly-in-string': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 1,
    'no-unneeded-ternary': 2,
    'no-unreachable-loop': 2,
    'no-unused-expressions': 1, // writing code needs to be discussed
    'no-unused-private-class-members': 2,
    'no-use-before-define': 1,
    'no-useless-call': 1, // writing code needs to be discussed
    'no-useless-computed-key': [2, { enforceForClassMembers: true }],
    'no-useless-concat': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-useless-return': 2,
    'one-var': [2, 'never'],
    'operator-assignment': [2, 'always'],
    'prefer-arrow-callback': 1, // writing code needs to be discussed
    'prefer-const': 2,
    'prefer-exponentiation-operator': 1,
    'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],
    'prefer-regex-literals': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'prettier/prettier': 2,
    'quote-props': [2, 'as-needed'],
    'radix': 2,
    'require-atomic-updates': [2, { allowProperties: true }],
    'require-await': 2,
    'sort-keys': [2, 'asc', { caseSensitive: false, natural: false, minKeys: 2 }],
    'spaced-comment': [1, 'always'],
    'symbol-description': 2,
    'yoda': 2
  },
  settings: {
    'react': {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    }
  }
}
