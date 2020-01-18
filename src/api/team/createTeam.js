const models = require('../../models');

module.exports = async (req, res) => {
  const { body, member } = req;

  try {
    await models.Team.create({
      title: body.title,
      content: body.content,
      memberId: member.id,
      maxMember: body.maxMember,
      endDate: body.endDate,
    });

    return res.status(200).json({
      status: 200,
      message: '팀 생성 성공.',
    });
  } catch (err) {
    console.log('서버 오류.', err); s
    return res.status(500).json({
      status: 500,
      message: '서버 오류.',
    });
  }
}