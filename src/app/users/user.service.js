const userRepo = require('./user.repo');
const {createUser} = require("../auth/auth.repo");

const viewProfile = async (id) =>{
    const user = await userRepo.getUserById(id);
    if(!user)
        throw Error ('User not found');
    return user;
}

const updateProfile = async (id ,updatedData) =>{
    const { userName , email} = updatedData;

    if (!userName && !email)
        throw Error('At least one field is required');

    if (email) {
        const existingUser = await userRepo.findUserByEmail(email);

        if (existingUser && existingUser.id !== id)
            throw Error('Email already exists');
    }

    const updatedUser = await userRepo.updateUser(id,userName , email);
    if(!updatedUser)
        throw Error ('User not found');

    return updatedUser;
};
const deleteAccount = async (id) => {
    const deletedUser = await userRepo.deleteUser(id);

    if (!deletedUser)
        throw Error('User not found');

    return deletedUser;
};

module.exports = {
    viewProfile,
    updateProfile,
    deleteAccount,
}