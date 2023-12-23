const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let array = [];
  if ('' + options.addition === 'false' || '' + options.addition === 'null' || options.addition) {
    let addition = options.addition;
    if (options.additionRepeatTimes) {
      addition = new Array(options.additionRepeatTimes).fill(options.addition);
      if ('' + options.addition === 'null') {
        addition = addition.map(item => '' + item);
      }
    }
    if (Array.isArray(addition)) {
      (options.additionSeparator) ? addition = addition.join(options.additionSeparator) : addition = addition.join('|');
    }
    str += addition;
  }
  if (options.repeatTimes) {
    array = new Array(options.repeatTimes).fill(str);
  } else {
    array.push(str);
  }
  // debugger
  if (options.separator) return array.join(options.separator);
  return array.join('+');
}

module.exports = {
  repeater
};