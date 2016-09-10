var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');

require('./models/Games');
require('./models/Comments');


var routes = require('./routes/index');
var users = require('./routes/users');

mongoose.connect('mongodb://localhost/tennisbud');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


// // configuration ===========================================

// // config files
// var db = require('./config/db');

// // set our port
// var port = process.env.PORT || 8080;

// // connect to our mongoDB database
// // (uncomment after you enter in your own credentials in config/db.js)
// // mongoose.connect(db.url);

// // get all data/stuff of the body (POST) parameters
// // parse application/json
// app.use(bodyParser.json());

// // parse application/vnd.api+json as json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));



// // routes ==================================================
// require('./app/routes')(app); // configure our routes

// // start app ===============================================
// // startup our app at http://localhost:8080
// app.listen(port);

// // shoutout to the user
// console.log('Magic happens on port ' + port);



module.exports = app;

