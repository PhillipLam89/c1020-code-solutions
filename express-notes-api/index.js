const express = require('express');
const app = express();
const fs = require('fs');
const json = require('./data.json');


app.use(express.json())

const arr = []
//sets up json
for (let key in json.notes) {
  arr.push({ content: json.notes[key].content, id: key })
}


app.get('/api/notes', (req, res) => {

  res.status(200).send(JSON.stringify(arr, null, 2))
  return
});

app.get('/api/notes/:id', (req, res) => {

  if (Number(req.params.id) < 0 || isNaN(req.params.id) )  { //checks for negatives and NaNs
    res.status(400).json({ error: 'The id must be a positive integer, and no strings' });
  }
  else if (Number(req.params.id) >= json.nextId) {
    res.json({ error: `cannot find note with id ${req.params.id}` })
  }
  else if (Number(req.params.id) === json.notes[req.params.id].id) {
    res.status(200).send(json.notes[req.params.id]) // will evaluate to a string type inside [brackets]
  }
});
app.post('/api/notes', (req, res) => {
  if (!req.body.content) { // no content means undefined aka falsy inside an if statement
    res.status(400).send({ error: 'Content is a required field' });
  } else {;
    json.notes[json.nextId] = { content: req.body.content, id: json.nextId}; //directly puts an object as the value for a key, req and res still accessible
    json.nextId++;
    res.send(req.body)
    fs.writeFile('./data.json', JSON.stringify(json, null, 2), 'utf8', err => {
      if (err) { //this err will only happen during writing phase
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).send(json.notes[json.nextId]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
    //basic similar logic as above
  if (Number(req.params.id) < 0 || isNaN(req.params.id) ) {
    res.status(400).send({ error: 'The id must be a positive integer, and no letters' });
  } else if (!json.notes[req.params.id]) {
    res.status(404).send({ error: `cannot find any notes with id ${req.params.id}` });
  } else {
    delete json.notes[req.params.id] //updates data.json file by deleting user desired note
    fs.writeFile('./data.json', JSON.stringify(json, null, 2), 'utf8', err => { // saves newly updated data to file
      if (err) {
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});


app.put('/api/notes/:id', (req, res) => {
 //basic similar logic as above
  if (Number(req.params.id) < 0 || isNaN(req.params.id) ) {
    res.status(400).send({ error: 'The id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).send({ error: 'Content is a required field' });
  } else if (!json.notes[req.params.id]) {
    res.status(404).send({ error: `cannot find any notes with id ${req.params.id}` });
  } else {
    json.notes[req.params.id].content = req.body.content; //sets user-entered content into the json file, updates it
    fs.writeFile('./data.json', JSON.stringify(json, null, 2), 'utf8', err => {// save updates to file
      if (err) {
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).send(json.notes[req.params.id]);
      }
    });
  }
});
app.listen(3000, () => {
  console.log(`helllooo, Express server listening on port 3000
  `);
});
