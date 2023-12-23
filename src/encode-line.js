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
  if (!str) return '';

  let newLine = [];
  let currentChar = str[0];
  let counter = 1;
  for (let i = 1; i < str.length; i++) {
    if (currentChar !== str[i]) {
      (counter > 1) ? newLine.push(counter + currentChar) : newLine.push(currentChar);
      currentChar = str[i];
      counter = 1;
    } else {
      counter++;
    }
    if (i + 1 === str.length) {
      (counter > 1) ? newLine.push(counter + currentChar) : newLine.push(currentChar);
    }
  }
  return newLine.join('');
}
module.exports = {
  encodeLine
};