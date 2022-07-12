var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const recipesAPIRouter = require('./routes/recipes');
const accountsAPIRouter = require('./routes/accounts');

var app = express();


//connect to db
const dbURI = "mongodb+srv://babys_food:password1234@cluster0.9n4gq.mongodb.net/food-app?retryWrites=true&w=majority";
mongoose.connect(dbURI)
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/accounts', accountsAPIRouter);
app.use('/recipes', recipesAPIRouter);
// app.use('/images', express.static('images'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
