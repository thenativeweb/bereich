'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _iterator = require('babel-runtime/core-js/symbol/iterator');

var _iterator2 = _interopRequireDefault(_iterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bereich = function bereich(min, max, step) {
  if (min === undefined) {
    throw new Error('Min is missing.');
  }
  if (max === undefined) {
    throw new Error('Max is missing.');
  }

  var isAscending = min <= max;

  if (step === undefined) {
    step = isAscending ? 1 : -1;
  }

  return (0, _defineProperty3.default)({}, _iterator2.default, function () {
    return {
      value: min,

      next: function next() {
        var result = {
          done: isAscending ? this.value > max : this.value < max,
          value: this.value
        };

        this.value += step;

        return result;
      }
    };
  });
};

module.exports = bereich;