const models = require('../../models');

module.exports = async (req, res) => {
  const { idx } = req.params;
  const { member } = req;

  try {
    const team = await models.Team.findOne({
      where: {
        idx,
      },
    });

    if (!team) {
      console.log('없는 팀.');
      return res.status(404).json({
        status: 404,
        message: '없는 팀.',
      });
    }

    if (team.memberId !== member.id) {
      console.log('접근 권한 없음');
      return res.status(403).json({
        status: 403,
        message: '접근 권한 없음.',
      });
    }

    const members = await models.TeamMember.findAll({
      where: {
        teamIdx: idx,
      },
      raw: true,
    });

    return res.status(200).json({
      status: 200,
      message: '팀 회원 조회 성공.',
      data: {
        members,
      }
    });
  } catch (err) {
    console.log('서버 오류.', err);
    return res.status(500).json({
      status: 500,
      message: '서버 오류.',
    });
  }
}