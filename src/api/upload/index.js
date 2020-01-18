const upload = require('express').Router();
const uploadMiddleware = require('../../lib/method/setMulter')();

// 파일 생성
upload.post('/', uploadMiddleware.array('files'), require('./upload'));

module.exports = upload;
