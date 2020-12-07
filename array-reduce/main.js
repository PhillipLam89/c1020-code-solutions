/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

console.log('Sum of all array values:', numbers.reduce((accumulator, val) => accumulator + val, 0));
console.log('Product of all array values:', numbers.reduce((accumulator, val) => accumulator * val, 1));

const balance = account.reduce((acc, arr) => {

  if (arr.type === 'deposit') {
    return acc + arr.amount;
  } else {
    return acc - arr.amount;
  }
}, 0);
console.log('balance:', balance);

const composite = traits.reduce((acc, arr) => Object.assign(acc, arr));
console.log('composite: ', composite);
