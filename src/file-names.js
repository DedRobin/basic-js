const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!names.length) return [];

  const renamedFiles = new Map();

  for (let name of names) {
    if (renamedFiles.has(name)) {
      renamedFiles.set(name + `(${renamedFiles.get(name)})`, 1);
      renamedFiles.set(name, renamedFiles.get(name) + 1);
    } else {
      renamedFiles.set(name, 1);
    }
  }
  return Array.from(renamedFiles.keys());
}

module.exports = {
  renameFiles
};
// renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']);
