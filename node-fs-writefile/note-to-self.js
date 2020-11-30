/* eslint-disable no-console */
const fs = require('fs');
fs.writeFile('note.txt', process.argv[2], 'utf8', function (err) {
  if (err) throw err;
  console.log(`note.txt file created with content: ${process.argv[2]}.`);
});
