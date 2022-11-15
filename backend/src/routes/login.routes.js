const express = require('express');

const LoginController = require('../controller/login.controller');

const router = express.Router();

const loginController = new LoginController();

router.post('/', loginController.login);
router.post('/signUp', loginController.signUp);

module.exports = router;
