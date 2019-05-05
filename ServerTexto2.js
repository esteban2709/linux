var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<b>WikiLeaks publishes a "Highly Confidential" internal document from the cloud computing provider Amazon. The document from late 2015 lists the addresses and some operational details of over one hundred data centers spread across fifteen cities in nine countries. To accompany this document, WikiLeaks also created a map showing where Amazon’s data centers are located.</b>');
});

app.listen(3001, function () {
  console.log('Server On, Port 3000!');
});
