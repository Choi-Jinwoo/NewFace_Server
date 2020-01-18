const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../../config/token.json').secret;

exports.createToken = async (id) => {
  const payload = {
    id,
  };

  const options = {
    expiresIn: '12h',
    issuer: 'NewMeeting',
    subject: 'token',
  };

  return jwt.sign(payload, JWT_SECRET, options);
};

exports.verifyToken = async (token) => jwt.verify(token, JWT_SECRET);
