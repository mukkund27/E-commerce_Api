const CartRoutes = require('express').Router();
const CartController = require('./../controllers/cart_controller')

CartRoutes.get('/getUserCart/:user', CartController.getCartFromUser);
CartRoutes.post('/addToCart', CartController.addToCart);
CartRoutes.delete('/removeFromCart', CartController.removeFromCart);
 

module.exports = CartRoutes;