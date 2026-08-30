const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authRepo = require('./auth.repo');

const register = async function (userName, email, password) {

    if (!userName || !email || !password)
        throw Error("All fields are required");

    const existingUser = await authRepo.findUserByEmail(email);

    if (existingUser)
        throw Error('User already exists');

    if (password.length < 8)
        throw Error('Password must be at least 8 characters');

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await authRepo.createUser(
        userName,
        email,
        hashedPassword
    );

    return user;
};


const login = async (email, password) => {

    if (!email || !password)
        throw Error("All fields are required");

    const existingUser = await authRepo.findUserByEmail(email);

    if (!existingUser)
        throw Error('Invalid email or password');

    const isMatch = await bcrypt.compare(
        password,
        existingUser.password_hash
    );

    if (!isMatch)
        throw Error('Invalid email or password');

    const token = jwt.sign(
        {
            id: existingUser.id,
            userName: existingUser.user_name,
            role: existingUser.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );

    return token;
};


const changePassword = async (email, oldPassword, newPassword) => {

    if (!email || !oldPassword || !newPassword)
        throw Error("All fields are required");

    if (newPassword.length < 8)
        throw Error('New password must be at least 8 characters');

    const existingUser = await authRepo.findUserByEmail(email);

    if (!existingUser)
        throw Error('Invalid email or password');

    const isMatch = await bcrypt.compare(
        oldPassword,
        existingUser.password_hash
    );

    if (!isMatch)
        throw Error('Invalid email or password');

    const newHashedPassword = await bcrypt.hash(
        newPassword,
        10
    );

    const updatedUser = await authRepo.updatePassword(
        email,
        newHashedPassword
    );

    return updatedUser;
};


module.exports = {
    register,
    login,
    changePassword
};