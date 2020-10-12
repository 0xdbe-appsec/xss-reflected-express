const express = require('express');
const session = require('express-session');
const helmet = require("helmet");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const sessionConfig = require('./config/session.js');
const resultRouter = require('./routes/result.js');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(helmet.xssFilter());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/result', resultRouter);

module.exports = app;
