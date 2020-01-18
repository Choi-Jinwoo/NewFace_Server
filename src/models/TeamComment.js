/**
 * @description 게시글 모델
 * @author 최진우 <dgsw@kakao.com>
 */
module.exports = (sequelize, DataTypes) => {
  const TeamComment = sequelize.define('TeamComment', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      field: 'content',
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    teamIdx: {
      field: 'team_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    memberId: {
      field: 'member_id',
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  }, {
    tableName: 'team_comment',
  });

  return TeamComment;
};
