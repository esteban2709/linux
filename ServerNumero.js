var express = require('express');

var app = express();

var number = (Math.floor(Math.random() * 6) + 1);

app.get('/', function (req, res) {
  
res.send(''+number);

});



app.listen(3001, function () {
  
console.log('Server On, Port 3001!');

});
