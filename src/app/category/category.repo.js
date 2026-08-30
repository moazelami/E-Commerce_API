const pool = require('../../common/db/db');

const createCategory = async (category_name) => {
    const {rows} = await pool.query(`
                    INSERT INTO categories (name)
                    VALUES ($1)
                    RETURNING *;
    `,[category_name]);
    return rows[0];
};

const getAllCategories = async () => {
    const {rows} = await pool.query(`SELECT * FROM categories WHERE deleted = FALSE`);
    return rows;
};

const getCategoryById = async (category_id) => {
    const {rows} = await pool.query(`SELECT * FROM categories WHERE id = $1 AND deleted = FALSE` ,[category_id]);
    return rows[0];
};
const updateCategory = async (category_id, category_name) => {
    const {rows} = await pool.query(`
                   UPDATE categories
                   SET name = COALESCE($2 , name)
                    WHERE id = $1 
                    AND deleted = FALSE
                   RETURNING *;
    `,[category_id, category_name]);
    return rows[0];
};

const deleteCategory = async (category_id) => {
    const  {rows} = await pool.query(`
                    UPDATE categories
                    SET deleted = TRUE
                    WHERE id = $1
                    RETURNING *` , [category_id]);

    return rows[0];
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};