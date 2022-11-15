const { User } = require('../db/models');

class LoginMiddlewares {
  // async function bellow
  _findUserByEmail = (email) => User.findOne({ where: { email } });

  signUpMiddleware = async ({ body: { email } }, res, next) => {
    const user = await this._findUserByEmail(email);
    if (user) return res.status(400).json({ message: 'User already exists' });
    next();
  };

  loginMiddleware = async ({ body: { email } }, res, next) => {
    const user = await this._findUserByEmail(email);
    if (!user) return res.status(404).json({ message: 'User does not exists' });
    if (password !== user.password)
      return res.status(400).json({ message: 'Wrong password' });
    next();
  };
}

module.exports = LoginMiddlewares;
