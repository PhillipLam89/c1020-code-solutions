const express = require('express');

const app = express();

const arr = [
  {
    id: 1,
    name: 'Phillip',
    course: 'JS',
    grade: 1000
  },
  {
    id: 2,
    name: 'Tim',
    course: 'Financial Literacy',
    grade: 2000
  },
  {
    id: 3,
    name: 'Tom',
    course: 'Literacy',
    grade: 3000
  }
];

app.get('/api/grades', (req, res) => {
  res.json(arr);
});

app.delete('/api/grades/:id', (req, res) => {

  for (let i = 0; i < arr.length; i++) {
    if (Number(req.params.id) === arr[i].id) {
      arr.splice(i, 1);
      res.sendStatus(204);

    }
  }
});

app.listen(3000, () => {
  console.log(`Express server listening on port 3000
  `);
});
