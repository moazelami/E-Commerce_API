/*
delete account
*/
const {Router} = require('express');
const userRouter = Router();
const userController = require('./user.controller');

userRouter.get('/:id',userController.viewProfile);
userRouter.patch('/:id',userController.updateProfile);
userRouter.delete('/:id', userController.deleteAccount);

module.exports = userRouter;