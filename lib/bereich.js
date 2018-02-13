'use strict';

const bereich = function (min, max, step) {
  if (min === undefined) {
    throw new Error('Min is missing.');
  }
  if (max === undefined) {
    throw new Error('Max is missing.');
  }

  const isAscending = min <= max;

  if (step === undefined) {
    step = isAscending ? 1 : -1;
  }

  return {
    [Symbol.iterator] () {
      return {
        value: min,

        next () {
          const result = {
            done: isAscending ? this.value > max : this.value < max,
            value: this.value
          };

          this.value += step;

          return result;
        }
      };
    }
  };
};

module.exports = bereich;
