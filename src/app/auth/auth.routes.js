const authController = require('./auth.controller');
const {Router} = require('express');
const authRouter = Router();


authRouter.post('/register', authController.register);
authRouter.get('/login' , authController.login);
authRouter.patch('/changePassword' , authController.changePassword);

module.exports = authRouter;