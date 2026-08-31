const pool =require('../../common/db/db');

const getCartByUserId = async (userId) => {
    const { rows } = await pool.query(`
        SELECT *
        FROM cart
        WHERE user_id = $1;
    `, [userId]);

    return rows[0];
};


const createCart = async (userId) => {
    const { rows } = await pool.query(`
        INSERT INTO cart (user_id)
        VALUES ($1)
        RETURNING *;
    `, [userId]);

    return rows[0];
};


const getCart = async (userId) => {
    const {rows} = await pool.query(`
         SELECT
             ci.id AS cart_item_id,
             p.id AS product_id,
             p.name,
             p.price,
             ci.quantity,
                (p.price * ci.quantity) AS subtotal
         FROM cart c
         JOIN cart_items ci ON ci.cart_id =c.id
         JOIN products p ON p.id = ci.product_id
         WHERE c.user_id = $1
         AND p.deleted = FALSE;
         `,[userId]);

    return rows;
};

const addToCart = async (cartId, productId , quantity) => {
    const {rows} = await pool.query(`
            INSERT INTO cart_items 
                (cart_id , product_id, quantity) 
                VALUES ($1, $2, $3)
                    ON CONFLICT (cart_id , Product_id)
                    DO UPDATE
                        SET quantity = cart_items.quantity + EXCLUDED.quantity
            RETURNING *;
    `,[cartId , productId , quantity]);

    return rows[0];
};

const updateCartItem = async (userId, cartItemId, quantity) => {
    const {rows} = await pool.query(`
                UPDATE cart_items ci
                SET quantity = $3
                FROM cart c
                WHERE ci.id = $2
                AND ci.cart_id = c.id
                AND c.user_id = $1
                RETURNING *;
    `,[userId , cartItemId , quantity]);

    return rows[0];
};

const removeFromCart = async (userId, cartItemId) => {
    const {rows} = await pool.query(`
                DELETE FROM cart_items ci
                USING cart c
                WHERE ci.id = $1
                AND ci.cart_id = c.id
                AND c.user_id = $2
                RETURNING *;

    `,[cartItemId , userId]);
    return rows[0];
};

const clearCart = async (userId) => {
    const {rows} = await pool.query(`
                DELETE FROM cart_items 
                WHERE cart_id =(
                    SELECT id 
                    FROM cart
                    WHERE user_id = $1
                    )
                RETURNING *;
    `,[userId]);
};

module.exports = {
    createCart,
    getCartByUserId,
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart
};

