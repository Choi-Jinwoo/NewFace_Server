const models = require('../../models');

module.exports = async (req, res) => {

  try {
    const posts = await models.Post.findAll();

    return res.status(200).json({
      status: 200,
      message: '게시글 전체 조회 성공.',
      data: {
        posts,
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