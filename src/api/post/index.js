const post = require('express').Router();
const auth = require('../../middleware/auth');

post.post('/', auth, require('./createPost'));
post.post('/comment/:idx', auth, require('./createComment'));

module.exports = post;
