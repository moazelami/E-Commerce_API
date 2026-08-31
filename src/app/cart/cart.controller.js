const cartService = require('./cart.service');

const getCart = async (req, res, next) => {
    try {
        const cart = await cartService.getCart(req.user.id);

        res.status(200).json({
            success: true,
            cart
        });
    } catch (err) {
        next(err);
    }
};

const addToCart = async (req, res, next) => {
    try {
        const { productId, quantity } = req.body;

        const item = await cartService.addToCart(
            req.user.id,
            productId,
            quantity
        );

        res.status(201).json({
            success: true,
            message: 'Product added to cart.',
            item
        });
    } catch (err) {
        next(err);
    }
};

const updateCartItem = async (req, res, next) => {
    try {
        const { quantity } = req.body;

        const item = await cartService.updateCart(
            req.user.id,
            req.params.id,
            quantity
        );

        res.status(200).json({
            success: true,
            message: 'Cart item updated.',
            item
        });
    } catch (err) {
        next(err);
    }
};

const removeFromCart = async (req, res, next) => {
    try {
        const item = await cartService.removeFromCart(
            req.user.id,
            req.params.id
        );

        res.status(200).json({
            success: true,
            message: 'Product removed from cart.',
            item
        });
    } catch (err) {
        next(err);
    }
};

const clearCart = async (req, res, next) => {
    try {
        const items = await cartService.clearCart(req.user.id);

        res.status(200).json({
            success: true,
            message: 'Cart cleared successfully.',
            items
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart
};