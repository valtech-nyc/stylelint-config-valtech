'use strict';

module.exports = {
    extends: ['stylelint-config-standard'],
    plugins: ['stylelint-declaration-strict-value'],
    rules: {
        // Prefer .5 over 0.5 notation for brevity
        'number-leading-zero': 'never',
        // Vendor prefixes should be handled during the build process
        'property-no-vendor-prefix': true,
        // Reasons for disabling this rule in the code should be documented inline
        'declaration-no-important': true,
        // Enforce either variables, functions or custom CSS keywords for property values
        'scale-unlimited/declaration-strict-value': [
            // Match all color properties i.e. background-color, color, border-color, etc.
            '/color/',
            // Promote implementation of a layered system for z-index
            'z-index',
            // Promote reusability of font sizes
            'font-size'
        ]
    }
};
