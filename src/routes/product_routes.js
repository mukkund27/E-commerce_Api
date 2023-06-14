const ProductRoutes = require('express').Router();
const ProductController = require('./../controllers/product_controller')



ProductRoutes.get('/allProduct',ProductController.fetchAllProduct);
ProductRoutes.post('/createProduct', ProductController.createProduct);
ProductRoutes.get('/productByCategory/:id', ProductController.fetchProductByCategory);

module.exports = ProductRoutes;