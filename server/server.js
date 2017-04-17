const express = require('express');
const PORT = 3000;

// const morgan = require('morgan');
const parser = require('body-parser');

const router = require('./router.js');

const app = express();
module.exports.app = app;

// app.use(morgan('dev'));
app.use(parser.urlencoded({
  extended: true
}));
app.use(parser.json());

app.use('/app', router);

app.use(express.static('client'));

app.listen(PORT);
