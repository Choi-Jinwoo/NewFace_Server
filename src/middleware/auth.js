const models = require('../models');
const tokenLib = require('../lib/token');

module.exports = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(400).json({
      status: 400,
      message: '토큰 전송되지 않음.',
    });
  }

  try {
    const decoded = await tokenLib.verifyToken(token);

    // sub가 token이 아닐경우
    if (decoded.sub !== 'token') {
      response.UNAUTHORIZED(res,
        '잘못된 토큰입니다.');
      return;
    }

    // 토큰에 해당하는 회원이 없을 경우
    const member = await models.Member.findOne({
      where: {
        id: decoded.id,
      },
    });

    if (!member) {
      return res.status(404).json({
        status: 404,
        message: '회원 없음.',
      });
    }

    req.member = member;

    if (!next) {
      return;
    }
    next();
  } catch (err) {
    switch (err.message) {
      case 'jwt must be provided':
        return res.status(400).json({
          status: 400,
          message: '토큰이 전송되지 않음.',
        });
      case 'jwt malformed':
      case 'invalid token':
      case 'invalid signature':
        return res.status(401).json({
          status: 401,
          message: '토큰 위조됨',
        });
      case 'jwt expired':
        return res.status(500).json({
          status: 500,
          message: '토큰 만료.',
        });
      default:
        return res.status(500).json({
          status: 500,
          message: '토큰 검증 중 서버 오류'
        });
    }
  }
};
