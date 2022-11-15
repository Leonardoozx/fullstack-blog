const express = require('express');

const LoginController = require('../controller/login.controller');
const LoginMiddlewares = require('../middlewares/loginMiddlewares');

const router = express.Router();

const loginController = new LoginController();
const loginMiddlewares = new LoginMiddlewares();

router.post('/', loginMiddlewares.loginMiddleware, loginController.login);
router.post(
  '/signUp',
  loginMiddlewares.signUpMiddleware,
  loginController.signUp
);

module.exports = router;
