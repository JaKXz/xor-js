const xor = require('.');

test('not enough arguments', () => {
  expect(xor(true)).toBe(false);
  expect(xor(false)).toBe(false);
});

test('2 args', () => {
  expect(xor(true, false)).toBe(true);
  expect(xor(false, true)).toBe(true);
  expect(xor(true, true)).toBe(false);
  expect(xor(false, false)).toBe(false);
});

test('many arguments', () => {
  expect(xor(true, false, false)).toBe(true);
  expect(xor(true, true, true)).toBe(false);
  expect(xor(true, true, false)).toBe(false);
  expect(xor(false, false, false)).toBe(false);
  expect(xor(false, false, false, false, false, true)).toBe(true);
});
