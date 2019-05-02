var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<img src="https://wikileaks.org/amazon-atlas/logo@400.png">');
});

app.listen(3002, function () {
  console.log('Server On, Port 3000!');
});
