const convertToCelsius = function(fahr) {
  let Celsius = (fahr - 32) * 5/9;
  return parseFloat(Celsius.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  let Fahrenheit = (cel * 9/5) + 32;
  return Fahrenheit
};

convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
