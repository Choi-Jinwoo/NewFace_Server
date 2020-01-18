const models = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const member = await models.Member.findOne({
      attributes: ['id', 'name', 'email', 'kakao', 'intro'],
      where: {
        id,
      },
    });

    if (!member) {
      console.log('회원 없음.');
      return res.status(404).json({
        status: 404,
        message: '회원 없음.',
      });
    }

    return res.status(200).json({
      status: 200,
      message: '조회 성공.',
      data: {
        member,
      },
    });
  } catch (err) {
    console.log('서버 오류.', err);
    return res.status(500).json({
      status: '서버 오류.',
    });
  }
}