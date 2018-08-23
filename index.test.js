const xor = require('.');

test('examples', () => {
  expect(xor(false, true)).toBe(true);
  expect(xor(true, false, false)).toBe(true);
  expect(xor(true, true, true)).toBe(false);
  expect(xor(false, false, false)).toBe(false);
  expect(xor(false, false, false, false, false, true)).toBe(true);
});
