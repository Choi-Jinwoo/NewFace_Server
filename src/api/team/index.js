const team = require('express').Router();
const auth = require('../../middleware/auth');

team.post('/', auth, require('./createTeam'));
team.get('/join/:idx', auth, require('./joinTeam'));

module.exports = team;
