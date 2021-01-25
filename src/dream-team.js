const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let res = [];
  if (Array.isArray(arr)) {
    for (let el of arr) {
      if (typeof el === 'string') {
        res.push(el.trim().toUpperCase().substring(0, 1));
      } else {
        continue;
      }
    }
  }
  return (res.length === 0) ? false : res.sort().join('');
};