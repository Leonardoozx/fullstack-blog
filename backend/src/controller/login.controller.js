const LoginServices = require('../services/login.service');

class LoginController {
  _loginServices = new LoginServices();

  signUp = async ({ body }, res) => {
    const { message } = await this._loginServices.signUp(body);
    res.status(201).json(message);
  };

  login = async ({ body }, res) => {
    const message = await this._loginServices.login(body);
    res.status(200).json({ message });
  };
}

module.exports = LoginController;
