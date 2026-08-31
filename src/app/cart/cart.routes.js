const { Router } = require('express');

const cartController = require('./cart.controller');
const authenticate = require('../../common/middleware/auth.middleware');

const cartRouter = Router();

cartRouter.get('/', authenticate, cartController.getCart);

cartRouter.post('/items', authenticate, cartController.addToCart);

cartRouter.patch('/items/:id', authenticate, cartController.updateCartItem);

cartRouter.delete('/items/:id', authenticate, cartController.removeFromCart);
cartRouter.delete('/', authenticate, cartController.clearCart);

module.exports = cartRouter;