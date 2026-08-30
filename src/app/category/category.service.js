const categoryRepo = require('./category.repo');

const createCategory = async (category_name) => {
    if (!category_name)
        throw Error('Category name is required');

    const category = await categoryRepo.createCategory(category_name);

    return category;
};

const getAllCategories = async () => {
    return await categoryRepo.getAllCategories();
};

const getCategoryById = async (category_id) => {
    const category = await categoryRepo.getCategoryById(category_id);

    if (!category)
        throw Error('Category not found');

    return category;
};


const updateCategory = async (category_id, category_name) => {
    if (!category_name)
        throw Error('Category name is required');

    const category = await categoryRepo.updateCategory(
        category_id,
        category_name
    );

    if (!category)
        throw Error('Category not found');

    return category;
};

const deleteCategory = async (category_id) => {
    const category = await categoryRepo.deleteCategory(category_id);

    if (!category)
        throw Error('Category not found');

    return category;
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};