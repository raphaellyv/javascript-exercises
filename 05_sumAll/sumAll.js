const sumAll = function(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) return 'ERROR' ;

  const num1IsHigher = num1 > num2;
  const maxNum =  num1IsHigher ? num1 : num2;
  const minNum = num1IsHigher ? num2 : num1;
  var numbersSum = 0;

  for (i = minNum; i <= maxNum; i++) {
    numbersSum += i;
  }

  return numbersSum;
};

// Do not edit below this line
module.exports = sumAll;
