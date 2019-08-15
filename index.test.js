const xor = require('.');

test('not enough arguments', () => {
  expect(xor()).toBe(false);
  expect(xor(undefined)).toBe(false);
  expect(xor(null)).toBe(false);
  expect(xor(true)).toBe(false);
  expect(xor(false)).toBe(false);
});

test('2 args', () => {
  expect(xor(undefined, undefined)).toBe(false);
  expect(xor(undefined, true)).toBe(true);
  expect(xor(null, true)).toBe(true);
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
  expect(xor(undefined, true, false, false)).toBe(true);
  expect(xor(undefined, null, false, false)).toBe(false);
  expect(xor(false, false, false, false, false, true)).toBe(true);
});
