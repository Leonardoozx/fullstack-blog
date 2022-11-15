const UserServices = require('../services/user.service');

class UserController {
  _userServices = new UserServices();

  getAllUsers = async ({ query }, res) => {
    if (query.loggedUsers === 'true') {
      const allLoggedUsers = await this._userServices.getAllLoggedUsers();
      if (!allLoggedUsers.length) return res.status(200).json({ message: 'There is no users logged at this momment' })
      return res.status(200).json(allLoggedUsers);
    }
    const allUsers = await this._userServices.getAllUsers();
    res.status(200).json(allUsers);
  };
}

module.exports = UserController;
