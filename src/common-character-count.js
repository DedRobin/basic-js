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
  let commonCharCount = 0;
  let uniqChars = Array.from(new Set((s1 + s2).split('')));
  let strings = new Map();
  for (let s of arguments) {
    if (s === undefined) break;
    let stringMap = new Map();
    for (let char of s) {
      if (stringMap.get(char)) {
        stringMap.set(char, stringMap.get(char) + 1);
      } else {
        stringMap.set(char, 1);
      }
    }
    strings.set(s, stringMap);
  }
  for (let char of uniqChars) {
    const counter1 = strings.get(s1).get(char);
    const counter2 = strings.get(s2).get(char);
    if (counter1 && counter2) {
      (counter1 > counter2) ? commonCharCount += counter2 : commonCharCount += counter1;
    }
  }
  return commonCharCount;
}

module.exports = {
  getCommonCharacterCount
};