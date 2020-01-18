const tokenLib = require('../../lib/token');
const models = require('../../models');

/**
 * @description 로그인
 * @author 최진우 <dgsw@kakao.com>
 */
module.exports = async (req, res) => {
  const { body } = req;

  try {
    const member = await models.Member.findOne({
      where: {
        id: body.id,
        pw: body.pw,
      },
    });

    if (!member) {
      console.log('아이디 혹은 비밀번호가 일치하지 않음.');
      return res.status(401).json({
        status: 401,
        message: '아이디 혹은 비밀번호가 일치하지 않음.'
      });
    }

    const token = await tokenLib.createToken(body.id);
    const data = {
      'x-access-token': token,
    };

    console.log('로그인 성공');
    return res.status(200).json({
      status: 200,
      message: '로그인 성공.',
      data,
    });
  } catch (err) {
    console.log('서버 오류', err);
    return res.status(500).json({
      status: 500,
      message: '서버 오류.',
    });
  }
};
