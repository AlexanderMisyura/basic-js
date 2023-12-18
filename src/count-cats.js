const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  const cat = "^^";
  let catCounter = 0;

  for (const someYardThing of backyard) {
    for (const catOrNot of someYardThing) {
      if (catOrNot === cat) catCounter++;
    }
  }

  return catCounter;
}

module.exports = {
  countCats
};
