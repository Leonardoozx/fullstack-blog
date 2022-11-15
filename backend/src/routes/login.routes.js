const express = require('express');

const LoginController = require('../controller/login.controller');
const LoginMiddlewares = require('../middlewares/loginMiddlewares');

const router = express.Router();

const loginController = new LoginController();
const loginMiddlewares = new LoginMiddlewares();

router.post('/', loginMiddlewares.signUpMiddleware, loginController.login);
router.post(
  '/signUp',
  loginMiddlewares.loginMiddleware,
  loginController.signUp
);

module.exports = router;
