const { assert } = require('chai');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    console.log(this.chain.length);
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finishedChain = this.chain.join('~~');
    this.chain = [];
    return finishedChain;
  }
};

module.exports = {
  chainMaker
};