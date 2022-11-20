const functions = require("firebase-functions");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// storing relative file paths to routes
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
//const createAccountRouter = require('./routes/createaccount');

const app = express();  // creates an expess object

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

// sets up routes to different views
app.use('/', loginRouter);
app.use('/index', indexRouter);
//app.use('/createaccount', createAccountRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
exports.app = functions.https.onRequest(app)