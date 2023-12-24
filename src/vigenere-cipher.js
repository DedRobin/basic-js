const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverseIt = true) {
    this.originalString;
    this.reverseIt = reverseIt;
  }
  toConvertKey(key, str) {
    key = key.repeat(Math.ceil(str.length / key.length)).slice(0, str.length);
    const newKey = [];
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      const charCode = str[i].charCodeAt();
      const condition = charCode >= 65 && charCode <= 90;
      if (condition) {
        newKey.push(key[j++]);
      } else {
        newKey.push(str[i]);
      }
    }
    return newKey.join('');
  }
  encrypt(str = undefined, key = undefined) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    if (!this.reverseIt) str = str.split('').reverse().join('');

    this.originalString = str.toUpperCase();

    const chiperStr = [];

    const upperKey = key.toUpperCase();
    const upperStr = str.toUpperCase();
    const upperConvertKey = this.toConvertKey(upperKey, upperStr);

    for (let i = 0; i < upperStr.length; i++) {
      const charCodeOfStr = upperStr[i].charCodeAt();
      const charCodeOfKey = upperConvertKey[i].charCodeAt();
      if (charCodeOfStr >= 65 && charCodeOfStr <= 90) {
        const newCharCodeOfStr = (charCodeOfStr + charCodeOfKey) % 26 + 65;
        chiperStr.push(String.fromCharCode(newCharCodeOfStr));
      } else {
        chiperStr.push(upperStr[i]);
      }
    }
    return chiperStr.join('');
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    if (!this.reverseIt) str = str.split('').reverse().join('');
    if (!str || !key) throw new Error('Incorrect arguments!');

    const decryptedStr = [];

    const upperKey = key.toUpperCase();
    const upperStr = str.toUpperCase();
    const upperConvertKey = this.toConvertKey(upperKey, upperStr);

    for (let i = 0; i < upperStr.length; i++) {
      const charCodeOfStr = upperStr[i].charCodeAt();
      const charCodeOfKey = upperConvertKey[i].charCodeAt();
      if (charCodeOfStr >= 65 && charCodeOfStr <= 90) {
        const newCharCodeOfStr = Math.abs(charCodeOfStr - charCodeOfKey + 26) % 26 + 65;
        decryptedStr.push(String.fromCharCode(newCharCodeOfStr));
      } else {
        decryptedStr.push(upperStr[i]);
      }
    }
    return decryptedStr.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};