/* eslint-disable no-console */
const fs = require('fs');
const json = require('./data.json')
let count = 0

if (process.argv[2] === 'read') {
      console.log(JSON.stringify(json.notes,null,2))
}
else if (process.argv[2] === 'create') {
  for (let key in json.notes) {
    count++
  }
  json.notes[count + 2] = process.argv[3]
  fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', () => console.log(`data.json updated, you now have ${count + 2} notes.`));
}
else if (process.argv[2] === 'delete') {
  delete json.notes[process.argv[3]]
  fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', () => console.log(`Entry #${process.argv[3]} has been deleted.`))
}
else if (process.argv[2] === 'update') {
  json.notes[process.argv[3]] = process.argv[4]
  fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', () => console.log(`Entry #${process.argv[3]} has been updated with new content: ${process.argv[4]}`))
}
else console.log('invalid command, please use read, create, delete, or update (in lowercase).')
