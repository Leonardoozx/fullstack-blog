const { User, Comments } = require('../db/models');

class UserServices {
  // async functions bellow
  getAllUsers = () => User.findAll({ include: {model:Comments, as:'comments'} });

  getAllLoggedUsers = async () => {
    const allLoggedUsers = await User.findAll({
      where: { isUserLoggedIn: true },
      attributes: { exclude: ['password', 'id', 'isUserLoggedIn'] },
    });
    return allLoggedUsers;
  };
}

module.exports = UserServices;
