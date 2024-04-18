import globals from 'globals';

export default [
  { languageOptions: { globals: globals.node } },
  ...compat.extends('airbnb-base'),
  {
    rules: {
      'no-console': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
          message: 'Unexpected property on console object was called',
        },
      ],
    },
  },
];
