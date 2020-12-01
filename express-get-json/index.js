// eslint-disable-next-line no-console
const express = require('express');
const app = express();

const arr = [{
  id: 1,
  name: 'Beeg Yoshi',
  course: 'Meming',
  grade: 9001
  },
  {
    id: 2,
    name: 'PHIL',
    course: 'JavsScript',
    grade: 1221
  },
  {
    id: 3,
    name: 'TONY',
    course: 'NodeJS',
    grade: 5555
  }]

app.use('/api/grades', function (req, res) {
  res.json(arr)
});

app.listen(3000, function () {
  console.log('listening on port 3000')
});
