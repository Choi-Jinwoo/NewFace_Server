require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

exports.createToken = async (id) => {
  const payload = {
    id,
  };

  const options = {
    expiresIn: '12h',
    issuer: 'Bindalbe',
    subject: 'token',
  };

  return jwt.sign(payload, JWT_SECRET, options);
};

exports.verifyToken = async (token) => jwt.verify(token, JWT_SECRET);
