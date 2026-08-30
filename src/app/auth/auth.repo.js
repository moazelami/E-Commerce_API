
const pool =require('../../common/db/db');
const findUserByEmail = async (email)=>{
    const result = await pool.query(`SELECT * FROM users WHERE email =$1` , [email]);
    return result.rows[0];
};

const createUser = async (userName , email , hashedPassword)=>{
    const createdUser = await pool.query(`
        INSERT INTO users (user_name , email , password_hash)
        VALUES ($1,$2,$3)
        RETURNING id , user_name , email , role` , [userName , email , hashedPassword]
);
    return createdUser.rows[0];
};

const updatePassword = async (email , hashedPassword)=>{
    const result = await pool.query(
        `
        UPDATE users
        SET password_hash = $1,
            updated_at = NOW()
        WHERE email = $2
        RETURNING id , user_name , email , role
        `
        ,
        [hashedPassword , email]
    );
    return result.rows[0];
}

module.exports ={
    findUserByEmail,
    createUser,
    updatePassword,

}