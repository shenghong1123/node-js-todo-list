var express = require('express');
var app = express();

// set up template engine
app.set('view engine', 'ejs');

// serve static files
app.use(express.static('./public'));

// listen to port
app.listen(8080);
console.log('You are listening to port 8080');
