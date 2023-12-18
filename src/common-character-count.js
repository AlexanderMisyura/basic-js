const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let charMap = {};
  let s2Copy = s2;

  s1.replace(/./g, (char) => {
    if (s2Copy.includes(char)) {
      charMap[char] = charMap[char] + 1 || 1;
      s2Copy = s2Copy.replace(char, "");
    }
  });

  const commonChars = Object.values(charMap).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return commonChars;
}

module.exports = {
  getCommonCharacterCount
};
