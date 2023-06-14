const CategoryRoutes = require('express').Router();
const CategoryController = require('./../controllers/category_controller')


CategoryRoutes.get('/allCategory', CategoryController.fetchAllCategory);
CategoryRoutes.get('/:id', CategoryController.fetchCategoryById);
CategoryRoutes.post('/createCategory',CategoryController.createCategory);

module.exports = CategoryRoutes;