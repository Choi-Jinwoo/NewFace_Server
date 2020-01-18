const multer = require('multer');

/**
 * @description Multer 라이브러리 설정
 * @author 최진우 <dgsw@kakao.com>
 */
module.exports = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/');
    },
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
    },
  });
  return multer({ storage });
};
