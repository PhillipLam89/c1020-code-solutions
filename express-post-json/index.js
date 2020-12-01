const express = require('express');

const app = express();


let count = 0
const grades = [

];
express.json()
app.use(express.json(grades))

app.get('/api/grades', (req, res) => {
  res.json(grades);
});


app.post('/api/grades/', (req, res) => {
  count++
  req.body.nextId = count
  res.status(201)
  res.send(req.body)

});
app.listen(3000, () => {
  console.log(`Express server listening on port 3000
  `);
});
