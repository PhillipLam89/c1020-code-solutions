/* eslint-disable no-console */

const express = require('express');
const app = express();
const pg = require('pg');


const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.use(express.json())


app.get('/api/grades', (req, res) => {
  const sql = `
      select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(error => {
      res.status(500).json({ Error: 'An unexpected error has occurred.'})
    });
});

app.post('/api/grades/', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score || req.body.score < 1 || req.body.score > 100) {
    return res.status(400).json({ error: 'name, course, and score are required fields. Please fill in ALL of them. Scores must be 1-100.' });
  }
  const newContent = {
    name: req.body.name,
    course: req.body.course,
    score: Number(req.body.score)
  }

  const sql = `
      insert into "grades" ( "name", "course", "score")
      values ($1, $2, $3)
      returning *
  `;
  const arr = [newContent.name, newContent.course, newContent.score]
  db.query(sql, arr)
    .then(result => {
      return res.status(201).json(result.rows[0])
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred!!' });
    });
});


app.put('/api/grades/:gradeId', (req, res) => {  //updates current id if it exists
  const id = Number(req.params.gradeId)
  const updatedName = req.body.name;
  const updatedCourse = req.body.course;
  const updatedScore = Number(req.body.score);

  if (!Number.isInteger(id) || id < 1 || isNaN(id)) {
    return res.status(400).json({error: `Invalid input, gradeId must be a positive integer only.`})
  }
  else if (!updatedCourse || !updatedName || !updatedScore) {
    return res.status(404).json({ error: `The fields 'course', 'name', and 'score' are required` })
  }
  else if (updatedScore < 1 || updatedScore > 100) {
    return res.status(404).json({ error: `scores must be between 1-100` })
  }
  const query = {
    text: `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
      where "gradeId" = $4
      returning *
  `,
    values : [updatedName, updatedCourse, updatedScore,id]
  }
  db.query(query)
  .then(result => {
    if(!result.rows[0]) {
      res.status(404).json({ error: `Cannot find student with gradeId ${id} to update...` })
    }
    else if (result.rows[0]) {
      res.status(201).json(result.rows[0])
    }
  })
})



app.delete('/api/grades/:gradeId', (req, res) => {

  const id = Number(req.params.gradeId)
  const updatedName = req.body.name;
  const updatedCourse = req.body.course;
  const updatedScore = Number(req.body.score);
  if (!Number.isInteger(id) || id < 1 || isNaN(id)) {
    return res.status(400).json({ error: `GradeId must be a positive integer only...` });
  }
  const query = {
    text: `
    delete from "grades"
          where "gradeId" = ${id}
    returning *;
  `,
   value: [id]
  }
  db.query(query)
    .then(result => {
      if (!result.rows[0]) {
          res.status(404).json({error: `Cannot find student with gradeId ${id} to delete...`})
      }
      else if (result.rows[0]) {
        res.status(201).send(`Success! student with gradeId ${id} has been deleted.`)
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'An expected error occured!'})
    });
});


app.listen(3000, () => {
  console.log('Express server listening on Port 3000');


});
