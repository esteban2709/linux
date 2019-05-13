var express = require('express');

var app = express();



app.get('/', function (req, res) {
  
res.send('my number' + (Math.floor(Math.random() * 6) + 1));

});



app.listen(3001, function () {
  
console.log('Server On, Port 3001!');

});
