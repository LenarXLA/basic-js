const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== Number) {
    return false;
  }
  return Math.ceil((Math.log10(MODERN_ACTIVITY / sampleActivity)) / HALF_LIFE_PERIOD / Math.log10(2));
};
