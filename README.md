# stylelint-config-valtech

[Stylelint](https://stylelint.io/) configuration for Valtech's front-end team.

## How to use

Install the npm module:

```
yarn add stylelint-config-valtech
```

Extend the Stylelint ruleset by adding this to your `.stylelintrc.js`:

```javascript
module.exports = {
    extends: ['stylelint-config-valtech']
};
```

You can extend it with your own [rules](https://stylelint.io/user-guide/rules/) and [plugins](https://stylelint.io/user-guide/plugins/).
