const models = require('../../models');
const getFileUrl = require('../../lib/method/getFileUrl');

module.exports = async (req, res) => {

  try {
    const posts = await models.Post.findAll({
      raw: true,
    });

    for (let i = 0; i < posts.length; i++) {
      const files = await models.PostFile.findAll({
        where: {
          postIdx: posts[i].idx,
        },
        raw: true,
      });

      posts[i].files = [];
      for (let j = 0; j < files.length; j++) {
        posts[i].files.push(getFileUrl(req, files[j].fileName));
      }
    }

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