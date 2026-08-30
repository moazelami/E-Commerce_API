const pool = require('../../common/db/db');

const createProduct = async (
    productName,
    price,
    stock,
    categoryId
) => {
    const { rows } = await pool.query(`
        INSERT INTO products
            (name, price, stock, category_id)
        VALUES
            ($1, $2, $3, $4)
        RETURNING *;
    `, [productName, price, stock, categoryId]);

    return rows[0];
};


const getAllProducts = async () => {
    const { rows } = await pool.query(`
        SELECT *
        FROM products
        WHERE deleted = FALSE
    `);

    return rows;
};


const getProductById = async (productId) => {
    const { rows } = await pool.query(`
        SELECT *
        FROM products
        WHERE id = $1
        AND deleted = FALSE
    `, [productId]);

    return rows[0];
};


const updateProduct = async (
    productId,
    productName,
    price,
    stock,
    categoryId
) => {
    const { rows } = await pool.query(`
        UPDATE products
        SET
            name = COALESCE($1, name),
            price = COALESCE($2, price),
            stock = COALESCE($3, stock),
            category_id = COALESCE($4, category_id)
        WHERE id = $5
        AND deleted = FALSE
        RETURNING *;
    `, [
        productName,
        price,
        stock,
        categoryId,
        productId
    ]);

    return rows[0];
};


const deleteProduct = async (productId) => {
    const { rows } = await pool.query(`
        UPDATE products
        SET deleted = TRUE
        WHERE id = $1
        AND deleted = FALSE
        RETURNING *;
    `, [productId]);

    return rows[0];
};


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};