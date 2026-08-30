const authenticate = require('../../common/middleware/auth.middleware');
const {Router} = require('express');
const userRouter = Router();
const userController = require('./user.controller');

userRouter.get('/:id',authenticate,userController.viewProfile);
userRouter.patch('/:id',authenticate,userController.updateProfile);
userRouter.delete('/:id',authenticate,userController.deleteAccount);

module.exports = userRouter;