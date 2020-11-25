/* eslint-disable no-console */

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

(function (num1, operator, num2) {
  if (Number.isNaN(num1) || Number.isNaN(num2) ) {
    console.log('please enter a numerical value')
  }
  else if (operator === 'plus') {
    console.log('result:', add(num1, num2));3+3
  } else if (operator === 'subtract' || operator === 'minus') {
    console.log('result:', subtract(num1, num2));
  } else if (operator === 'multiply' || operator === 'times') {
    console.log('result:', multiply(num1, num2));
  } else if (operator === 'divide') {
    console.log('result:', divide(num1, num2));
  } else {
    console.log('operator name not recognized')
  }
})(Number(process.argv[2]), process.argv[3], Number(process.argv[4]));
