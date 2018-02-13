'use strict';

const assert = require('assertthat');

const range = require('../../lib/bereich');

suite('bereich', () => {
  test('is a function.', async () => {
    assert.that(range).is.ofType('function');
  });

  test('throws an error if min is missing.', async () => {
    assert.that(() => {
      range();
    }).is.throwing('Min is missing.');
  });

  test('throws an error if max is missing.', async () => {
    assert.that(() => {
      range(1);
    }).is.throwing('Max is missing.');
  });

  test('returns an iterator.', async () => {
    assert.that(range(1, 10)).is.ofType('object');
    assert.that(range(1, 10)[Symbol.iterator]).is.ofType('function');
  });

  test('returns the range from min to max.', async () => {
    assert.that(Array.from(range(1, 10))).is.equalTo([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
  });

  test('returns the range from min to max in descending order if required.', async () => {
    assert.that(Array.from(range(10, 1))).is.equalTo([ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]);
  });

  test('returns the range from min to max with the given step.', async () => {
    assert.that(Array.from(range(1, 10, 2))).is.equalTo([ 1, 3, 5, 7, 9 ]);
  });
});
