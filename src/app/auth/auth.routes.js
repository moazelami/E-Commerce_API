const authController = require('./auth.controller');
const {Router} = require('express');
const authRouter = Router();

authRouter.post('/register', authController.register);

module.exports = authRouter;