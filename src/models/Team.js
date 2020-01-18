/**
 * @description 게시글 모델
 * @author 최진우 <dgsw@kakao.com>
 */
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      field: 'title',
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    content: {
      field: 'content',
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    memberId: {
      field: 'member_id',
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    maxMember: {
      field: 'max_member',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    endDate: {
      field: 'end_date',
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }, {
    tableName: 'team',
  });

  return Team;
};
