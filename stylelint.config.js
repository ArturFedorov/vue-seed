module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order'
  ],
  rules: {
    // Base rules
    indentation: 2,
    'number-leading-zero': 'never',
    'length-zero-no-unit': true,
    'string-quotes': 'single',
    'selector-max-id': 0,
    'selector-list-comma-newline-after': 'always',
    'rule-empty-line-before': [
      'always',
      { ignore: ['after-comment'], except: ['first-nested'] }
    ],
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'] }
    ],
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-property-value-blacklist': { '/^border/': ['none'] },
    'no-extra-semicolons': true,
    'selector-type-case': 'lower',
    'unit-case': 'lower',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'property-case': 'lower',

    // Sass rules
    'max-nesting-depth': 6,
    'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
    'scss/at-extend-no-missing-placeholder': true
  }
};
