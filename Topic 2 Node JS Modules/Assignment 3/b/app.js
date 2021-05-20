// Use fs.readFile to get hold of the about.html file. you can use __dirname to get the
// current directory. In the fs call back use response.write() to write the file contents
// to the response. Finally call response.end to send the index.html file content to the
// user.
// (Note: call-backs are asynchronous, you don't know how long it will take to start
// reading the file, and Node will not wait. This means you will need to call
// response.end in the fs call back or the response will be returned before the file has
// been read.);

var express = require('express');
var path = require('path');

//routes
var indexRoutes = require('./routes/index');
var aboutRoutes = require('./routes/about');

//init app
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', indexRoutes);
app.use('/about', aboutRoutes);

//set port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('server started on port'+ app.get('port'));
});
