import {test} from 'uvu';
import * as assert from 'uvu/assert';

import xor from './index.js';

test('not enough arguments', () => {
  assert.is(xor(), false);
  assert.is(xor(undefined), false);
  assert.is(xor(null), false);
  assert.is(xor(true), false);
  assert.is(xor(false), false);
});

test('2 args', () => {
  assert.is(xor(undefined, undefined), false);
  assert.is(xor(undefined, true), true);
  assert.is(xor(null, true), true);
  assert.is(xor(true, false), true);
  assert.is(xor(false, true), true);
  assert.is(xor(true, true), false);
  assert.is(xor(false, false), false);
});

test('many arguments', () => {
  assert.is(xor(true, false, false), true);
  assert.is(xor(true, true, true), false);
  assert.is(xor(true, true, false), false);
  assert.is(xor(false, false, false), false);
  assert.is(xor(undefined, true, false, false), true);
  assert.is(xor(undefined, null, false, false), false);
  assert.is(xor(false, false, false, false, false, true), true);
});

test.run();
