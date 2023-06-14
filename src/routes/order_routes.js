const OrderRoutes = require('express').Router();
const OrderController = require('./../controllers/order_controller')
 
OrderRoutes.get('/fetchOrder/:userId', OrderController.fetchOrder);
OrderRoutes.post('/createOrder', OrderController.createOrder);
OrderRoutes.put('/updateStatus', OrderController.updateOrderStatus);
 
 

module.exports = OrderRoutes;