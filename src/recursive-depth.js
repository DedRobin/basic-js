const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let nestedCalcDepths = [];
    for (let item of arr) {
      if (Array.isArray(item)) {
        nestedCalcDepths.push(this.calculateDepth(item) + 1);
      }
    }
    if (nestedCalcDepths.length) {
      return Math.max(...nestedCalcDepths);
    }
    return 1;
  }
}

module.exports = {
  DepthCalculator
};