const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numbersArray) {
	let numbersSum = 0;

  for (number of numbersArray) {
    numbersSum += number;
  }

  return numbersSum;
};

const multiply = function(numbersArray) {
  let numbersSum = 1;

  for (number of numbersArray) {
    numbersSum *= number
  }

  return numbersSum;
};

const power = function(num, power) {
	return Math.pow(num, power)
};

const factorial = function(num) {
	initialValue = 1

  for (i = 1; i <= num; i++) {
    initialValue *= i;
  }

  return initialValue
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
