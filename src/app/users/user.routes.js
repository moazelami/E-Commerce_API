const authenticate = require('../../common/middleware/auth.middleware');
const {Router} = require('express');
const userRouter = Router();
const userController = require('./user.controller');

userRouter.get('/profile',authenticate,userController.viewProfile);
userRouter.patch('/profile',authenticate,userController.updateProfile);
userRouter.delete('/profile',authenticate,userController.deleteAccount);

module.exports = userRouter;