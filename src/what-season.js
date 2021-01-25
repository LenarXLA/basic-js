const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(...date) {
  try {
    if (date.length === 0) {
      return 'Unable to determine the time of year!';
    }

    for (let el of date) {
      if (isNaN(el)) throw Error;
    }

    let time = new Date(...date);
    let month = time.getMonth();
    if (month >= 2 && month <= 4) {
      return 'spring';
    } else if (month >= 5 && month <= 7) {
      return 'summer';
    } else if (month >= 8 && month <= 10) {
      return 'autumn';
    } else if (month === 11 || month === 0 || month === 1) {
      return 'winter';
    }
  } catch (e) {
    throw e;
  }
};