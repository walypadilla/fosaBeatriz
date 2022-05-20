const express = require('express');

const app = express();

const homeRoutes = require('./home.routes');
const ErrorMiddleware = require('../controllers/error.controller');

app.use(homeRoutes);

app.use(ErrorMiddleware.get404);

module.exports = app;
