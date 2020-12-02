/* eslint-disable no-console */
const fs = require('fs');
const json = require('./data.json');

if (process.argv[2] === 'read') {
  console.log(JSON.stringify(json.notes, null, 2));
} else if (process.argv[2] === 'create') {
  json.notes[json.nextId] = process.argv[3];
  json.nextId++;
  fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'delete') {
  delete json.notes[process.argv[3]];
  fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'update') {
  json.notes[process.argv[3]] = process.argv[4];
  fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', err => {
    if (err) throw err;
  });
} else console.log('invalid command, please use read, create, delete, or update (in lowercase).');
