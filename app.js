var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var auth = require('./routes/auth');
var category = require('./routes/category');
var post = require('./routes/post');
var cors = require('cors')

// mongoose.connect('mongodb://localhost/blog-cms', { 
  mongoose.connect('mongodb+srv://rene:653251799@cluster0.b10ud.mongodb.net/test', { 
    promiseLibrary: require('bluebird'), 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


//app.use(express.static(__dirname, '/dist'));

app.use(cors())
app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', auth);
app.use('/api/category', category);
app.use('/api/post', post);
app.use('/api/public', indexRouter);
app.use('/users', usersRouter);

//const port = 3000;
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Connected to port' + port)
})

//module.exports = app;

