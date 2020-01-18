const models = require('../../models');
const getFileUrl = require('../../lib/method/getFileUrl');
module.exports = async (req, res) => {
  const { idx } = req.params;

  try {
    const comments = await models.PostComment.findAll({
      where: {
        postIdx: idx,
      },
      raw: true,
    });

    return res.status(200).json({
      status: 200,
      message: '게시글 댓글 조회 성공.',
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