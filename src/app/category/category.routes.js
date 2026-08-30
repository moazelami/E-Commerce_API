const {Router} = require('express');
const categoryRouter = Router();

const categoryController = require('./category.controller');
const authenticate = require('../../common/middleware/auth.middleware');
const authorization = require('../../common/middleware/authorization.middleware');

categoryRouter.get('/' , categoryController.getAllCategories);
categoryRouter.get('/:id' , categoryController.getCategoryById);

categoryRouter.post('/' , authenticate , authorization , categoryController.createCategory);

categoryRouter.patch('/:id',authenticate , authorization , categoryController.updateCategory);

categoryRouter.delete('/:id',authenticate , authorization , categoryController.deleteCategory);

module.exports = categoryRouter;


