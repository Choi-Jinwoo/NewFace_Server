/**
 * @description 파일 업로드
 * @author 최진우 <dgsw@kakao.com>
 */
module.exports = async (req, res) => {
  const filesInfo = req.files;
  const files = [];
  for (let i = 0; i < filesInfo.length; i += 1) {
    files.push(filesInfo[i].filename);
  }

  const data = {
    files,
  };

  console.log("파일 업로드 성공");
  return res.status(200).json({
    status: 200,
    message: '파일 업로드 성공.',
    data,
  });
};
