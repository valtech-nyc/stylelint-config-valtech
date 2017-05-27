'use strict';

module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        // Prefer .5 over 0.5 notation for brevity
        'number-leading-zero': 'never',
        // Vendor prefixes should be handled during the build process
        'property-no-vendor-prefix': true,
        // Reasons for disabling this rule in the code should be documented inline
        'declaration-no-important': true
    }
};
