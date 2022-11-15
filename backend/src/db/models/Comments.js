module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    'Comments',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        field: 'user_id',
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      content: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'comments',
    }
  );
  return Comments;
};
