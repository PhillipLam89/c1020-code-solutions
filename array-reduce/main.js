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


console.log('Sum of all array values:', numbers.reduce((accumulator, val) => accumulator + val, 0))
console.log('Product of all array values:', numbers.reduce((accumulator, val) => accumulator * val, 1))


let total = 0
const balance = account.reduce((acc, arr) => {
  arr.type === 'deposit' ? total += arr.amount : total -= arr.amount
},0);
console.log('balance:', total);




const composite = {} //start with empty obj
traits.reduce((x, y) => {
  Object.assign(composite, y) //properties in y will be added to previous obj
}, {}) // initiallizor is empty obj
console.log('Combined:', composite)



// const composite2 = {};
// for (let i = 0; i < traits.length; i++) {
//   for (let objs in traits[i]) {
//     composite2[objs] = traits[i][objs]
//   }
// }
// console.log('composite2:', composite2);
