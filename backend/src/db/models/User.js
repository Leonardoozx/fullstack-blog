module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      isUserLoggedIn: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users',
    }
  );
  return User;
};
