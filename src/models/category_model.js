const { Schema, model } = require('mongoose');

const categorySchema=new Schema({
    title:{type:String,required:[true,"title is required"]},
    description:{type:String,default:""},
    updated_on:{type:Date},
    created_on:{type:Date}
});


categorySchema.pre('save',function(next){
   
    this.updated_on=new Date();
    this.created_on=new Date();

    

    next();
})

categorySchema.pre(['update','findOneAndUpdate','updateOne'],function(next){
    const update =this.update();

    delete update._id;
 

    this.updated_on =Date();
    next();
});

const categoryModel=model('Category',categorySchema);

module.exports=categoryModel;