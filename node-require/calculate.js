/* eslint-disable no-console */

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

(function calculate(num1, operator, num2) {
  num1 = Number(process.argv[2]);
  operator = process.argv[3];
  num2 = Number(process.argv[4]);

  if (operator === 'plus') {
    console.log('result:', add(num1, num2));
  } else if (operator === 'subtract' || operator === 'minus') {
    console.log('result:', subtract(num1, num2));
  } else if (operator === 'multiply' || operator === 'times') {
    console.log('result:', multiply(num1, num2));
  } else if (operator === 'divide') {
    console.log('result:', divide(num1, num2));
  }
})();
