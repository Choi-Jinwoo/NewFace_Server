const models = require('../../models');

module.exports = async (req, res) => {
  const { member } = req;

  try {
    const teams = await models.Team.findAll({
      where: {
        memberId: member.id,
      },
    });

    return res.status(200).json({
      status: 200,
      message: '나의 팀 조회 성공.',
      data: {
        teams,
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