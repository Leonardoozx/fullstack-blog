const { User } = require('../db/models');

class LoginServices {
  // async function bellow
  _findUserByEmail = (email) => User.findOne({ where: { email } });

  signUp = async ({ email, name, password }) => {
    const user = await this._findUserByEmail(email);
    if (user) return { type: 'ERROR', message: 'User already exists' };
    const registedUser = await User.create({ email, name, password });
    return { type: null, message: registedUser };
  };

  login = async ({ email, password }) => {
    const user = await this._findUserByEmail(email);
    if (!user)
      return {
        type: 'ERROR',
        message: 'User does not exists',
      };
    if (password !== user.password)
      return { type: 'ERROR', message: 'Wrong password' };
    await User.update({ isUserLoggedIn: true }, { where: { email, password } });
    return { type: null, message: 'Login happened with success!' };
  };
}

module.exports = LoginServices;
