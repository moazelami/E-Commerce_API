const authService = require('./auth.service');
const {continueSession} = require("pg/lib/crypto/sasl");

const register = async (req , res ,next) => {
    try{
        const {userName , email ,password} = req.body;
        const user = await authService.register(
            userName,
            email,
            password,
        );
        res.status(201).json({
            success: true,
            message: 'User registered successfully.',
            user
        });
    }catch (err){
        next(err);
    }
};

const login = async (req , res ,next) => {
    try{
        const {email , password} = req.body;
        const user = await authService.login(
            email,
            password,
        );
        res.status(200).json({
            success: true,
            message: 'User login successfully.',
            user
        });
    }catch (err){
        next(err);
    }
};

const changePassword = async (req , res ,next) => {
  try {
      const {email, oldPassword , newPassword} = req.body;
      const user = await authService.changePassword(
          email,
          oldPassword,
          newPassword
      );
      res.status(200).json({
          success: true,
          message: 'password changed successfully.',
          user
      })
  } catch (err){
    next(err);
  }
};
module.exports = {
    register,
    login,
    changePassword,

}