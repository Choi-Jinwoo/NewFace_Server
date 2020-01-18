const post = require('express').Router();
const auth = require('../../middleware/auth');

post.post('/comment/:idx', auth, require('./createComment'));
post.get('/comment/:idx', auth, require('./getComments'));

post.post('/', auth, require('./createPost'));
post.get('/', auth, require('./getPosts'));
post.get('/:idx', auth, require('./getPost'));

module.exports = post;
