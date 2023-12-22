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
  let max = 0;
  const numAsString = '' + n;
  const numOfDigits = numAsString.length;
  for (let i = 0; i < numOfDigits; i++) {
    const newNum = +(numAsString.slice(0, i) + numAsString.slice(i + 1));
    if (newNum > max) max = newNum;
  }
  return max;
}

module.exports = {
  deleteDigit
};