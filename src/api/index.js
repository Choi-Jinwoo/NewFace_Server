const api = require('express').Router();

api.use('/auth', require('./auth'));
api.use('/post', require('./post'));

module.exports = api;
