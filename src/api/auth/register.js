const models = require('../../models');

/**
 * @description 회원가입
 * @author 최진우 <dgsw@kakao.com>
 */
module.exports = async (req, res) => {
  const { body } = req;

  try {
    // 이미 존재하는 회원인지 확인
    const member = await models.Member.findOne({
      where: {
        id: body.id,
      },
    });

    if (member) {
      console.log('이미 존재하는 회원');
      return res.status(409).json({
        status: 409,
        message: '이미 존재하는 회원',
      });
    }

    // 회원 생성
    await models.Member.create({
      id: body.id,
      pw: body.pw,
      name: body.name,
      email: body.email,
      intro: body.intro,
      kakao: body.kakao,
    });

    return res.status(200).json({
      status: 200,
      message: '회원 가입 성공.',
    });
  } catch (err) {
    console.log('서버 오류.', err);
    return res.status(500).json({
      status: 500,
      message: '서버 오류.',
    });
  }
};
