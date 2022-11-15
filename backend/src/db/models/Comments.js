const { User } = require('../models');

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

  Comments.associate = (models) => {
    Comments.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    models.User.hasMany(models.Comments, { as: 'user' });
  };

  return Comments;
};
