const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let max = Number(str.slice(1));

  for (let i = 0; i < str.length; i++) {
    const number = Number(str.slice(0, i) + str.slice(i + 1));
    if (max < number) {
      max = number;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
