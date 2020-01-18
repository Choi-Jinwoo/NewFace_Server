const models = require('../../models');

module.exports = async (req, res) => {
  const { body, member } = req;
  const { idx } = req.params;

  try {
    const team = await models.Team.findOne({
      where: {
        idx,
      },
    });

    if (!team) {
      console.log('없는 팀');
      return res.status(404).json({
        status: 404,
        message: '없는 팀',
      });
    }

    await models.TeamComment.create({
      content: body.content,
      memberId: member.id,
      teamIdx: idx,
    });

    return res.status(200).json({
      status: 200,
      message: '댓글 생성 성공.',
    });
  } catch (err) {
    console.log('서버 오류.', err); s
    return res.status(500).json({
      status: 500,
      message: '서버 오류.',
    });
  }
}