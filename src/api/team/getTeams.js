const models = require('../../models');

module.exports = async (req, res) => {

  try {
    const teams = await models.Team.findAll();

    return res.status(200).json({
      status: 200,
      message: '팀 전체 조회 성공.',
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