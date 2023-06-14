const CartModel = require("../models/cart_model");

const CartController = {

    getCartFromUser: async function (req, resp) {
        try {
            const user=req.params.user;
            const foundCart = await CartModel.findOne({ user: user });
            if (!foundCart) {
                return resp.json({ success: true, data: [], });
            } else {
                return resp.json({ success: false, data: foundCart.items });
            }
        } catch (ex) {
            console.log(ex)
            return resp.json({ success: false, message: ex });
        }
    },


    addToCart: async function (req, resp) {
        try {
            const { product, user, quantity } = req.body;
            const foundCart = await CartModel.findOne({ user: user });
            if (!foundCart) {
                const newCart = new CartModel({ user: user });
                newCart.items.push({
                    product: product,
                    quantity: quantity
                });
                await newCart.save();
                return resp.json({ success: true, data: newCart, message: 'Product Added to Cart' });
            }  
                const updatedCart = await CartModel.findOneAndUpdate(
                    { user: user },
                    { $set: { items: { product: product, quantity: quantity } }, },
                    { new: true });

                return resp.json({ success: true, data: updatedCart, message: 'Product updated' });
           




        } catch (ex) {
            console.log(ex)
            return resp.json({ success: false, message: ex });
        }
    },

    removeFromCart: async function (req, resp) {
        try {
            const { user, product } = req.body;
            const updatedCart = await CartModel.findOneAndUpdate({ user: user }, { $pull: { items: { product: product } } });
            return resp.json({ success: true, data: updatedCart, message: 'Product Remove from Cart' });
        } catch (ex) {
            return resp.json({ success: false, message: ex });
        }
    },

}

module.exports = CartController;