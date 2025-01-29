const convertToCelsius = function (temp) {
  const tempInCels = (temp - 32) * (5 / 9);
  const tempInCelsRounded = Math.round(tempInCels * 10) / 10;
  return tempInCelsRounded;
};

const convertToFahrenheit = function (temp) {
  const tempInFahr = temp * (9 / 5) + 32;
  const tempInFahrRounded = Math.round(tempInFahr * 10) / 10;
  return tempInFahrRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
