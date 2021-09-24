# xor-js

[![Node.js CI](https://github.com/JaKXz/xor-js/actions/workflows/node.js.yml/badge.svg)](https://github.com/JaKXz/xor-js/actions/workflows/node.js.yml)
[![npm Version](https://img.shields.io/npm/v/xor-js.svg)](https://www.npmjs.com/package/xor-js)
[![npm Downloads Monthly](https://img.shields.io/npm/dm/xor-js.svg)](https://www.npmjs.com/package/xor-js)

This package provides a rudimentary XOR check of a list of arguments in JS. Given any arity of arguments it will return true iff only **one** of the arguments is _truthy_, otherwise, it will return false.

## Example Usage

```bash
npm install xor-js
# XOR ;)
yarn add xor-js
```

A powerful application is to combine this package with [`invariant`](https://npm.im/invariant) to create rules for your API.

```js
import xor from 'xor-js';
import invariant from 'invariant';

function MyComponent({ primary, secondary, tertiary, ...props }) {
  invariant(xor(primary, secondary, tertiary), 'Only one of primary, secondary, or tertiary may be true.')
  
  return (...);
}
```

You will need the `--harmony` flag or [babel](https://babeljs.io) for `node` 4.9.x.

## Credits

This was adapted and inspired from [this post on Code Review](https://codereview.stackexchange.com/a/199864/18700).
