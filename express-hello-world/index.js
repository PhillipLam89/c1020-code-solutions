
const express = require('express');
const app = express();

app.use(function (req, res) {

  res.send('HELLO');
});

app.listen(3000, function () {

});
