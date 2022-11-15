const LoginServices = require('../services/login.service');

class LoginController {
  _loginServices = new LoginServices();

  signUp = async ({ body }, res) => {
    const { type, message } = await this._loginServices.signUp(body);
    if (type) return res.status(400).json({ message });
    res.status(201).json(message);
  };

  login = async ({ body }, res) => {
    const { type, message } = await this._loginServices.login(body);
    if (type) return res.status(400).json({ message });
    res.status(200).json({ message });
  };
}

module.exports = LoginController;
