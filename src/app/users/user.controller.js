const userService = require('./user.service');

const viewProfile = async (req , res , next) => {
    try{
        const userProfile = await userService.viewProfile(req.user.id);
        res.status(200).json({
            success: true,
            message: 'Profile retrieved successfully.',
            userProfile
        });
    }catch(err){
        next(err);
    }
};

const updateProfile = async (req , res , next) => {
    try{
        const userProfile = await userService.updateProfile(req.user.id, req.body);
        res.status(200).json({
            success: true,
            message: 'Profile updated successfully.',
            userProfile
        });
    }catch(err){
        next(err);
    }
}

const deleteAccount = async (req, res, next) => {
    try {
        const deletedUser = await userService.deleteAccount(
            req.user.id
        );

        res.status(200).json({
            success: true,
            message: 'Account deleted successfully.',
            deletedUser
        });

    } catch (err) {
        next(err);
    }
};

module.exports = {
    viewProfile,
    updateProfile,
    deleteAccount
}