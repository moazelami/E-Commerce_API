const categoryService = require('./category.service');

const createCategory = async (req, res , next) => {
    try{
        const category = await categoryService.createCategory(req.body.name);
        res.status(201).json({
            success: true,
            message: 'Category created',
            category
        });
    }catch(err){
        next(err);
    }
};

const getAllCategories = async (req, res , next) => {
    try{
        const categories = await categoryService.getAllCategories();
        res.status(200).json({
            success: true,
            categories
        });
    }catch(err){
        next(err);
    }
};

const getCategoryById = async (req, res , next) => {
    try{
        const category = await categoryService.getCategoryById(req.params.id);
        res.status(200).json({
            success: true,
            category
        });
    }catch(err){
        next(err);
    }
};

const updateCategory = async (req, res , next) => {
    try{
        const category = await categoryService.updateCategory(req.params.id, req.body.name);
        res.status(200).json({
            success: true,
            message: 'Category updated',
            category
        });
    }catch(err){
        next(err);
    }
};

const deleteCategory = async (req, res , next) => {
    try{
        const category = await categoryService.deleteCategory(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Category deleted',
            category
        })
    }catch(err){
        next(err);
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};