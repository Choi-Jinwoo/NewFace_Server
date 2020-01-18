const auth = require('express').Router();

auth.post('/login', require('./login'));
auth.post('/register', require('./register'));

module.exports = auth;
