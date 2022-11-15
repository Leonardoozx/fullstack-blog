const { User } = require('../db/models');

class LoginServices {
  signUp = async ({ email, name, password }) => {
    const registedUser = await User.create({ email, name, password });
    return {  message: registedUser };
  };

  login = async ({ email, password }) => {
    await User.update({ isUserLoggedIn: true }, { where: { email, password } });
    return { message: 'Logged in with success' }
  };
}

module.exports = LoginServices;
