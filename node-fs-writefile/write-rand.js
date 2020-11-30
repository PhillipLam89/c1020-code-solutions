/* eslint-disable no-console */
const fs = require('fs');
fs.writeFile('random.txt', Math.random(), 'utf8', function (err) {
  if (err) throw err;
  console.log('random.txt file created');
});
