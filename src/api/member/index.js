const member = require('express').Router();
const auth = require('../../middleware/auth');

member.get('/:id', auth, require('./getMember'));

module.exports = member;
