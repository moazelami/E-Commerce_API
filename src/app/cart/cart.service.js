const cartRepo = require('./cart.repo');

const getCart = async (userId) => {
    return await cartRepo.getCart(userId);
};

const addToCart = async (userId , productId , quantity) => {
    if (!productId || !quantity)
        throw Error('Product and quantity are required');
    if(quantity <= 0)
        throw Error('Quantity must be greater than 0');

    let cart = await cartRepo.getCartByUserId(userId);
    if (!cart)
        cart = await cartRepo.createCart(userId);


    return await cartRepo.addToCart(cart.id ,productId, quantity);
};

const updateCart = async (userId, cartItemId, quantity) => {
    if (quantity === undefined || quantity === null)
        throw new Error('Quantity is required');

    if(quantity <= 0)
        throw Error('Quantity must be greater than 0');

    const item = await cartRepo.updateCartItem(userId, cartItemId, quantity);
    if(!item)
        throw Error('Cart not found');

    return item;
};

const removeFromCart = async (userId, cartItemId) => {
    const item = await cartRepo.removeFromCart(userId, cartItemId);
    if(!item)
        throw Error('Cart item not found');
    return item;
};
const clearCart = async (userId) => {
    const cart = await cartRepo.getCartByUserId(userId);

    if (!cart)
        throw Error('Cart not found');
    return cart;
};

module.exports = {
    getCart,
    addToCart,
    updateCart,
    removeFromCart,
    clearCart,
};
