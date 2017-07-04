var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

// set up template engine
app.set('view engine', 'ejs');

// serve static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(8080);
console.log('You are listening to port 8080');
