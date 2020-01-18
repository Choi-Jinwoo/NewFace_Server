const team = require('express').Router();
const auth = require('../../middleware/auth');

team.post('/', auth, require('./createTeam'));
team.get('/join/:idx', auth, require('./joinTeam'));
team.get('/', auth, require('./getTeams'));

team.get('/comment/:idx', auth, require('./getComments'));
team.post('/comment/:idx', auth, require('./createComment'));

team.get('/my', auth, require('./getMyTeams'));
team.get('/my/member/:idx', auth, require('./getMyTeamMembers'));

module.exports = team;
