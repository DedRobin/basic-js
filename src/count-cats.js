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
function countCats(matrix) {
  const cat = '^^';
  let counter = 0;
  for (i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(cat)) {
      const row = matrix[i];
      for (let item of row) {
        if (item === cat) counter++;
      }
    }
  }
  return counter;
}

module.exports = {
  countCats
};
