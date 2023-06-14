const productModel = require("../models/product_model");

const ProductController = {
    createProduct: async function (req, resp) {
        try {
            const productData = req.body;
            const newProduct = new productModel(productData);
            await newProduct.save();
            return resp.json({ success: true, data: newProduct, message: "Product Created!" });
        } catch (ex) {
            return resp.json({ success: false, message: ex });
        }
    },
    fetchAllProduct: async function (req, resp) {
        try {

            const products = await productModel.find();

            return resp.json({ success: true, data: products, });
        } catch (ex) {
            return resp.json({ success: false, message: ex });
        }
    },
    fetchProductByCategory: async function (req, resp) {
        try {
            const categoryId = req.params.id;
            const products = await productModel.find({category:categoryId });

            return resp.json({ success: true, data: products, });
        } catch (ex) {
            return resp.json({ success: false, message: ex });
        }
    }
}

module.exports = ProductController;