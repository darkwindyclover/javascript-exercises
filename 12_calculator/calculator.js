const add = function(x ,y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y
};

const sum = function(arr) {
	return arr.reduce((ac, x) => ac+x, 0);
};

const multiply = function(arr) {
  if (arr.length == 0) return 0;
  else return arr.reduce((ac, x) => ac*x, 1)
};

const power = function(x, y) {
	return x**y
};

const factorial = function(x) {
  if (x == 0) {return 1;}
  else return x * factorial(x-1);
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
