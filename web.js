var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = new Buffer(256);

app.get('/', function(request, response) {
var output = fs.readFileSync('index.html');
buf.write(output);  
response.send(buf.toString());
response.send('Hello World');
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
