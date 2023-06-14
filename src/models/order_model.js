const { Schema, model } = require('mongoose');


const orderItemSchema= new Schema({
product:{type:Map,required:true},
quantity:{type:Number,default:1}

})

const orderSchema = new Schema({
    user: { type: Map, required: true },
    items: { type: [orderItemSchema], default: [] },
    status:{type:String,default:"order-placed"},
    updated_on: { type: Date },
    created_on: { type: Date }
});


orderSchema.pre('save', function (next) {
    this.updated_on = new Date();
    this.created_on = new Date();
    next();
})

orderSchema.pre(['update', 'findOneAndUpdate', 'updateOne'], function (next) {
    const update = this.findOneAndUpdate();
     
    delete update._id;
    this.updated_on = Date();
    next();
});

const OrderModel = model('Order', orderSchema);
 
module.exports = OrderModel;