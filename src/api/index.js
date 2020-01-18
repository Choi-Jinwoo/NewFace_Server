const api = require('express').Router();

api.use('/auth', require('./auth'));
api.use('/post', require('./post'));
api.use('/upload', require('./upload'));
api.use('/team', require('./team'));

module.exports = api;
