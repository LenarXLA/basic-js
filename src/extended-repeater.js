const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '';
  for (let i = 1; i <= (options.repeatTimes || 1); i++) {
    res += str;
    if (options.addition !== undefined) {
      for (let j = 1; j <= (options.additionRepeatTimes || 1); j++) {
        res += options.addition;
        if (j !== (options.additionRepeatTimes || 1)) {
          res += (options.additionSeparator || '');
        }
      }
    }
    if (i !== (options.repeatTimes || 1)) {
      res += (options.separator || '+');
    }
  }
  return res;
};