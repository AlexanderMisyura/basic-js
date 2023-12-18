const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let current = str[0];
  let result = "";
  let accumulator = "";

  for (let char of str) {
    console.log("result", result);
    current = char;
    if (accumulator[0] === current) {
      accumulator += char;
    } else {
      const accLength = accumulator.length
        ? accumulator.length !== 1
          ? accumulator.length
          : ""
        : "";
      result += accLength + (accumulator[0] || "");
      accumulator = char;
      current = char;
    }
  }
  const accLength = accumulator.length
    ? accumulator.length !== 1
      ? accumulator.length
      : ""
    : "";
  if (result) {
    result += accLength + accumulator[0];
  }

  return result;
}

module.exports = {
  encodeLine
};
