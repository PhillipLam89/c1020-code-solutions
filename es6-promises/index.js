/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promise1 = takeAChance('Phillip');

promise1.then(function (val) {
  console.log(`Hooray! You're so lucky, ${val}!`);
})
  .catch(function (err) {
    console.error(err.message);
  });
