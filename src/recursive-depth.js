const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    arr.forEach(el => {
      if (Array.isArray(el)) {
        let depth = 1;
        depth += this.calculateDepth(el);
        maxDepth = depth > maxDepth ? depth : maxDepth;
      }
    });
    return maxDepth;
  }
};