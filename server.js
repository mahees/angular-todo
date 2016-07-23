var express = require('express');

var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
    res.status(200).sendFile(path.join(__dirname + 'public/index.html'));
});

app.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function () {
  console.log('Example app listening on port ' + process.env.PORT || 3000);
});