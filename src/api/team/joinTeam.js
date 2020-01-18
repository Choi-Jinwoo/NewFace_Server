const models = require('../../models');

module.exports = async (req, res) => {
  const { member } = req;
  const { idx } = req.params;

  try {
    const team = await models.Team.findOne({
      where: {
        idx,
      },
    });

    if (!team) {
      console.log('팀 없음.');
      return res.status(404).json({
        status: 404,
        message: '팀 없음.',
      });
    }


    await models.TeamMember.create({
      teamIdx: idx,
      memberId: member.id,
    });

    return res.status(200).json({
      status: 200,
      message: '팀 가입 신청 성공.',
    });
  } catch (err) {
    console.log('서버 오류.', err); s
    return res.status(500).json({
      status: 500,
      message: '서버 오류.',
    });
  }
}