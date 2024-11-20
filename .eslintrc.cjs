module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'semi': false,
        "endOfLine": "auto"
      }
    ],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-var': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [
      'warn',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'index',
          'sibling',
          'object'
        ],
        'pathGroups': [
          { 'pattern': 'components', 'group': 'internal' },
          { 'pattern': 'common', 'group': 'internal' },
          { 'pattern': 'routes/ **', 'group': 'internal' },
          { 'pattern': 'assets/**', 'group': 'internal', 'position': 'after' }
        ],
        'pathGroupsExcludedImportTypes': ['internal'],
        'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
        'newlines-between': 'always'
      }
    ],
    'sort-imports': [
      'warn',
      { 'ignoreCase': true, 'ignoreDeclarationSort': true }
    ],
  },
}
