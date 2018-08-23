# XOR JS

Basic XOR for a list of JS args.

Given a list of booleans returns true if only one is true, otherwise false.

This can be useful in a comonent design system where you want to switch a component's behaviour based on several related flags:

```js
function Button({ primary, secondary, tertiary }) {
  invariant(xor(primary, secondary, tertiary), 'Only one of primary, secondary, or tertiary may be true');
  return <button />;
}
```
