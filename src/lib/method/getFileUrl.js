/**
 * @description 정적 파일 URL 반환
 * @author 최진우 <dgsw@kakao.com>
 */
module.exports = (req, fileName) => {
  const { host } = req.headers;
  return `${host}/static/${fileName}`;
};
