const pool = require('../../common/db/db');
const db = require("../../common/db/db");


const getUserById = async (id)=>{
    const result = await pool.query(
        `
        SELECT user_name , email , role ,created_at 
        FROM users 
        WHERE id = $1
        ` ,
        [id]
    );
    return result.rows[0];
}

const updateUser =  async (id , userName ,email)=>{
    const result = await pool.query(`
    UPDATE users 
    SET user_name = COALESCE($1 , user_name),
        email = COALESCE($2 , email),
        updated_at = NOW()
        WHERE id = $3
    RETURNING id , user_name , email , role , updated_at
        
    `,
        [userName , email ,id]);
    return result.rows[0];
};

const findUserByEmail = async (email)=>{
    const result = await pool.query(`SELECT * FROM users WHERE email =$1` , [email]);
    return result.rows[0];
};

const deleteUser = async (id) => {
    const result = await pool.query(`DELETE FROM users WHERE id = $1
        RETURNING id, user_name, email, role
`, [id]);
    return result.rows[0];
}

module.exports ={
    getUserById,
    updateUser,
    findUserByEmail,
    deleteUser
}