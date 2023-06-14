const { Schema, model } = require('mongoose');


const cartItemSchema= new Schema({
product:{type:Schema.Types.ObjectId,ref:'Product'},
quantity:{type:Number,default:1}

})

const cartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: { type: [cartItemSchema], default: [] },
    updated_on: { type: Date },
    created_on: { type: Date }
});


cartSchema.pre('save', function (next) {
    this.updated_on = new Date();
    this.created_on = new Date();
    next();
})

cartSchema.pre(['update', 'findOneAndUpdate', 'updateOne'], function (next) {
    const update = this.findOneAndUpdate();
     
    delete update._id;
    this.updated_on = Date();
    next();
});

const CartModel = model('Cart', cartSchema);
 
module.exports = CartModel;