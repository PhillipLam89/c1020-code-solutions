/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];
const doubled = numbers.map(x => x * 2);
console.log('doubled:', doubled);
const prices = numbers.map(function (num) {
  return `$${num.toFixed(2)}`;
});
console.log('prices syntax:', prices);
const upperCased = languages.map(x => x.toUpperCase());
console.log('Uppercased:', upperCased);

const firstLetters = languages.map(x => x[0]);
console.log('First Letters Only:', firstLetters);
