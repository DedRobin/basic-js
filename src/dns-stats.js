const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {};
  const DnsStats = {};
  const checked = [];
  for (let domain of domains.map(item => item.split('.'))) {
    let previousStat = '';
    for (let stat of domain.reverse()) {
      if (previousStat) stat = [stat, previousStat].join('.');
      if (!checked.includes(stat)) checked.push(stat);
      previousStat = stat;
    }
  }
  for (let checkedStat of checked) {
    let counter = 0;
    for (let domain of domains) {
      if (domain.includes(checkedStat)) counter++;
    }
    checkedStat = '.' + checkedStat.split('.').reverse().join('.');
    DnsStats[checkedStat] = counter;
  }
  return DnsStats;
}

module.exports = {
  getDNSStats
};