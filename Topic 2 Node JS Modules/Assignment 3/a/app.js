//Create a folder called views (there's nothing special about this folder name, it's
//just a common name for one part of a standard MVC pattern). In this folder make a
//file called index.html. Add some content to it

var express = require('express');
var path = require('path');

//routes
var routes = require('./routes/index');

//init app
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', routes);

//set port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('server started on port'+ app.get('port'));
});
