const OrderModel = require("../models/order_model");
const OrderController = {
    createOrder: async function (req, resp) {
        try {
            const { user, items } = req.body;
            const newOrder = new OrderModel({
                user: user,
                items: items
            });
            await newOrder.save();
            return resp.json({ success: true, data: newOrder, message: "Order Created!" });

        }
        catch (ex) {
            return resp.json({ success: false, message: ex });
        }
    },
    fetchOrder: async function (req, resp) {
        try {
            const userId = req.params.userId;
            const foundOrder = await OrderModel.find({ 'user.id': userId });
            console.log(foundOrder)
            if (foundOrder) {
                return resp.json({ success: true, data: foundOrder, message: "Order Founded" });
            } else {
                return resp.json({ success: true, data: foundOrder, message: "Order Not Found" });
            }


        }
        catch (ex) {
            return resp.json({ success: false, message: ex });
        }
    },
    updateOrderStatus: async function (req, resp) {
        try {
            const { orderId, status } = req.body;
            const foundOrder = await OrderModel.findOneAndUpdate(
                { _id: orderId }, 
                {status: status}, 
                { new: true });
       
            if (foundOrder) {
                return resp.json({ success: true, data: foundOrder, message: "Order Founded" });
            } else {
                return resp.json({ success: true, data: foundOrder, message: "Order Not Found" });
            }


        }
        catch (ex) {
            return resp.json({ success: false, message: ex });
        }
    },
}

module.exports = OrderController;