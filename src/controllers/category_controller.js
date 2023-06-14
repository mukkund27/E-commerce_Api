const categoryModel = require('./../models/category_model')

const CategoryController = {

    createCategory: async function (req, resp) {
        try {
            const categoryData = req.body;
            const newCategory = new categoryModel(categoryData);
            await newCategory.save();

            return resp.json({ success: true, data: newCategory, message: "Category Created!" });

        } catch (ex) {
            return resp.json({ success: false, message: ex });
        }
    },

    fetchAllCategory: async function (req, resp) {
        try {

            const categories = await categoryModel.find();


            return resp.json({ success: true, data: categories, });

        } catch (ex) {
            return resp.json({ success: false, message: ex });
        }
    },

    fetchCategoryById: async function (req, resp) {
        try {
            const id = req.params.id;
            const foundCategory = await categoryModel.findById(id);
            if (!foundCategory) {
                return resp.json({ success: false, message: "Category not found!", });

            }

            return resp.json({ success: true, data: foundCategory, });

        } catch (ex) {
            return resp.json({ success: false, message: ex });
        }
    }
}
module.exports = CategoryController;