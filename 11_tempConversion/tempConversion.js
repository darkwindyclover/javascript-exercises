const convertToCelsius = function(f) {
  let c = (f - 32)*5/9
  if (Number.isInteger(c)) { return c;}
  return c = parseFloat(c.toFixed(1));
};

const convertToFahrenheit = function(c) {
  let f = (c*9/5+32);
  if (Number.isInteger(f)) { return f;}
  return f = parseFloat(f.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
