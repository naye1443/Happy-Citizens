const functions = require("firebase-functions");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Used for session and cookie writing
const session  = require('express-session');
const {v4: uuidv4} = require('uuid');


// storing relative file paths to routes
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const citizenDashboard = require('./routes/citizenDashboard');
const SuperDashboard = require('./routes/SuperDashboard');

const app = express();  // creates an expess object

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

// adding additional middleware for session and cookies
app.use(session(
  { name:'SessionCookie',
    genid: function(req) {
        console.log('session id created');
      return uuidv4();}, // returns randomly generated uuid
    secret: 'A big! Webserver!',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false,expires:60000 },
    loggedIn: false
  }));

// sets up routes to different views
app.use('/', loginRouter);
app.use('/index', indexRouter);
app.use('/citizenDashboard', citizenDashboard);
app.use('/SuperDashboard', SuperDashboard);

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
exports.app = functions.https.onRequest(app);