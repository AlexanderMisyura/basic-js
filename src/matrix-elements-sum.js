const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const noZeroColumns = Array(matrix[0].length).fill(true);

  return matrix.reduce((acc, row) => {
    return (
      acc +
      row.reduce((acc, el, i) => {
        const currentSum = noZeroColumns[i] ? acc + el : acc;
        noZeroColumns[i] = Boolean(el);
        return currentSum;
      }, 0)
    );
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
