/**
 * @description Http Response 생성
 * @author 최진우 <dgsw@kakao.com>
 */
module.exports = (res, status, message, data) => {
  if (data === null) {
    res.status(status).json({
      status,
      message,
    });
  } else {
    res.status(status).json({
      status,
      message,
      data,
    });
  }
};
