const productService = require('./product.service');

const createProduct = async (req, res, next) => {
    try {
        const { productName, price, stock, categoryId } = req.body;

        const product = await productService.createProduct(
            productName,
            price,
            stock,
            categoryId
        );

        res.status(201).json({
            success: true,
            message: 'Product created successfully.',
            product
        });
    } catch (err) {
        next(err);
    }
};


const getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();

        res.status(200).json({
            success: true,
            products
        });
    } catch (err) {
        next(err);
    }
};


const getProductById = async (req, res, next) => {
    try {
        const product = await productService.getProductById(
            req.params.id
        );

        res.status(200).json({
            success: true,
            product
        });
    } catch (err) {
        next(err);
    }
};


const updateProduct = async (req, res, next) => {
    try {
        const { productName, price, stock, categoryId } = req.body;

        const product = await productService.updateProduct(
            req.params.id,
            productName,
            price,
            stock,
            categoryId
        );

        res.status(200).json({
            success: true,
            message: 'Product updated successfully.',
            product
        });
    } catch (err) {
        next(err);
    }
};


const deleteProduct = async (req, res, next) => {
    try {
        const product = await productService.deleteProduct(
            req.params.id
        );

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully.',
            product
        });
    } catch (err) {
        next(err);
    }
};


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};