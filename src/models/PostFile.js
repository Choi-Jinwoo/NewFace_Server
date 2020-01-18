/**
 * @description 게시글 모델
 * @author 최진우 <dgsw@kakao.com>
 */
module.exports = (sequelize, DataTypes) => {
  const PostFile = sequelize.define('PostFile', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    postIdx: {
      field: 'post_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fileName: {
      field: 'file_name',
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  }, {
    tableName: 'post_file',
  });

  return PostFile;
};
