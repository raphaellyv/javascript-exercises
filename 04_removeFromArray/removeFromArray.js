const removeFromArray = function(originalArray, ...args) {

  return originalArray.filter((ogNumber) => !args.includes(ogNumber))
};

// Do not edit below this line
module.exports = removeFromArray;
