const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const notSortedIndexes = [];
  const filtered = arr
    .filter((el, i) => {
      if (el === -1) {
        notSortedIndexes.push(i);
        return false;
      }
      return true;
    })
    .sort((a, b) => a - b);

  for (const i of notSortedIndexes) {
    filtered.splice(i, 0, -1);
  }

  return filtered;
}
module.exports = {
  sortByHeight
};
