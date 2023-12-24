const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  if (!arr.length) return [];

  let newArr = [];
  let actions = ['--double-prev', '--double-next', '--discard-prev', '--discard-next'];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-prev':
        if (newArr.at(-1) !== null) newArr.push(newArr.at(-1));
        break;
      case '--double-next':
        newArr.push(arr[i + 1], arr[i + 1]);
        i++;
        break;
      case '--discard-prev':
        debugger
        newArr.pop();
        break;
      case '--discard-next':
        newArr.push(null);
        i++;
        break;
      default:
        newArr.push(arr[i])
    }
  }
  newArr = newArr.filter(item => item !== null && item !== undefined);
  console.log(newArr);
  return newArr;
}

module.exports = {
  transform
};