const productRepo = require('./product.repo');

const createProduct = async (
    productName,
    price,
    stock,
    categoryId
) => {
    if (!productName || price == null || stock == null || !categoryId)
        throw Error('All product fields are required');

    if (price < 0)
        throw Error('Price cannot be negative');

    if (stock < 0)
        throw Error('Stock cannot be negative');

    return await productRepo.createProduct(
        productName,
        price,
        stock,
        categoryId
    );
};


const getAllProducts = async () => {
    return await productRepo.getAllProducts();
};


const getProductById = async (productId) => {
    const product = await productRepo.getProductById(productId);

    if (!product)
        throw Error('Product not found');

    return product;
};


const updateProduct = async (
    productId,
    productName,
    price,
    stock,
    categoryId
) => {
    if (price != null && price < 0)
        throw Error('Price cannot be negative');

    if (stock != null && stock < 0)
        throw Error('Stock cannot be negative');

    const product = await productRepo.updateProduct(
        productId,
        productName,
        price,
        stock,
        categoryId
    );

    if (!product)
        throw Error('Product not found');

    return product;
};


const deleteProduct = async (productId) => {
    const product = await productRepo.deleteProduct(productId);

    if (!product)
        throw Error('Product not found');

    return product;
};


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};