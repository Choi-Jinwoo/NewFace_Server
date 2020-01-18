const models = require('../../models');

module.exports = async (req, res) => {
  const { body, member } = req;

  try {
    const post = await models.Post.create({
      title: body.title,
      content: body.content,
      memberId: member.id,
    });

    if (body.files) {
      for (let i = 0; i < body.files.length; i += 1) {
        await models.PostFile.create({
          postIdx: post.idx,
          fileName: body.files[i],
        });
      }
    }


    return res.status(200).json({
      status: 200,
      message: '글 생성 성공.',
    });
  } catch (err) {
    console.log('서버 오류.', err); s
    return res.status(500).json({
      status: 500,
      message: '서버 오류.',
    });
  }
}