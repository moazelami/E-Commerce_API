const { Router } = require('express');

const productController = require('./product.controller');
const authenticate = require('../../common/middleware/auth.middleware');
const authorization = require('../../common/middleware/authorization.middleware');

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);

productRouter.post('/', authenticate, authorization, productController.createProduct);

productRouter.patch('/:id', authenticate, authorization, productController.updateProduct);

productRouter.delete('/:id',authenticate, authorization, productController.deleteProduct);

module.exports = productRouter;