// code borrowed from my WatchNow server.js

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const options = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};

const sessionStore = new MySQLStore(options);

const careerRouter = require('./routes/career');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);

// tells express to use this directory for files
app.use(express.static('public'));

app.use(express.urlencoded({limit: '1mb', extended: false}));
app.use(express.json());
app.use(flash());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

app.use(function(req, res, next) {
  try {
    res.locals.username = req.user.username;
    console.log('User Logged In, ID:', req.user.id);
  } catch {
    console.log('User Not Logged In');
  }
  next();
})

app.use('/', careerRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server listening on port:', port);
})