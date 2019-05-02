var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<b>Si o no</b>');
});

app.listen(3001, function () {
  console.log('Server On, Port 3000!');
});
