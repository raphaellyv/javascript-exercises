const convertToCelsius = function(temp) {
  const tempF = (temp - 32) * (5/9);

  return +tempF.toFixed(1)
};

const convertToFahrenheit = function(temp) {
  const tempC = (temp * 9 / 5) + 32;

  return +tempC.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
