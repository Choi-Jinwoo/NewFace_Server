const models = require('../../models');
const getFileUrl = require('../../lib/method/getFileUrl');
module.exports = async (req, res) => {
  const { idx } = req.params;

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

    const comments = await models.TeamComment.findAll({
      where: {
        teamIdx: idx,
      },
      raw: true,
    });

    return res.status(200).json({
      status: 200,
      message: '팀 댓글 조회 성공.',
      data: {
        comments,
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