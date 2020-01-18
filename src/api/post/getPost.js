const models = require('../../models');
const getFileUrl = require('../../lib/method/getFileUrl');
module.exports = async (req, res) => {
  const { idx } = req.params;

  try {
    const post = await models.Post.findOne({
      where: {
        idx,
      },
      raw: true,
    });

    const files = await models.PostFile.findAll({
      where: {
        postIdx: idx,
      },
      raw: true,
    });

    post.files = [];
    for (let i = 0; i < files.length; i++) {
      post.files.push(getFileUrl(req, files[i].fileName));
    }

    return res.status(200).json({
      status: 200,
      message: '게시글 조회 성공.',
      data: {
        post,
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