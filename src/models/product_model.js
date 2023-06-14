const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    title: { type: String, required: [true, "title is required"] },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    images: { type: Array, default: [] },
    updated_on: { type: Date },
    created_on: { type: Date }
});


productSchema.pre('save', function (next) {

    this.updated_on = new Date();
    this.created_on = new Date();



    next();
})

productSchema.pre(['update', 'findOneAndUpdate', 'updateOne'], function (next) {
    const update = this.update();

    delete update._id;


    this.updated_on = Date();
    next();
});

const productModel = model('Product', productSchema);

module.exports = productModel;