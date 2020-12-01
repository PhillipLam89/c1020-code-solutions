const express = require('express');

const app = express();


let count = 0
const grades = [

];

app.use(express.json())

app.get('/api/grades', (req, res) => {
  res.json(grades);
});


app.post('/api/grades/', (req, res) => {
  count++
  req.body.id = count
  grades.push(req.body) //updates original file
  res.status(201)
  res.send(req.body)

});
app.listen(3000, () => {
  console.log(`Express server listening on port 3000
  `);
});
