const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let parts = email.split('@');
  if (parts.at(-1)[0] === '.') return parts.at(-1).splice(1);
  return parts.at(-1);
}

module.exports = {
  getEmailDomain
};

// getEmailDomain('prettyandsimple@example.com')