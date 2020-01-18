/**
 * @description 회원 모델
 * @author 최진우 <dgsw@kakao.com>
 */
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    id: {
      field: 'id',
      type: DataTypes.STRING(45),
      primaryKey: true,
    },
    pw: {
      field: 'pw',
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      field: 'email',
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    intro: {
      field: 'intro',
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: '안녕하세요.',
    },
    kakao: {
      field: 'kakao',
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    tableName: 'member',
  });

  return Member;
};
