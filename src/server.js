const express=require("express");
const bodyParser=require("body-parser");
const helmet=require("helmet");
const morgan=require("morgan");
const cors=require("cors");
const mongoose=require('mongoose');
const UserRoutes = require("./routes/user_router");
const CategoryRoutes = require("./routes/category_routes");
const ProductRoutes = require("./routes/product_routes");
const CartRoutes = require("./routes/cart_routes");
const OrderRoutes = require("./routes/order_routes");
const app=express();
const PORT =5000;

mongoose.connect('mongodb+srv://mdholariya108:lThpjDrRN2GwP6nJ@e-commerce.er755oa.mongodb.net/E-com')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());


 
app.use("/api/user",UserRoutes);
 
app.use('/api/category',CategoryRoutes); 

app.use('/api/product',ProductRoutes); 

app.use('/api/cart',CartRoutes);

app.use('/api/order',OrderRoutes)

app.listen(PORT,()=>{
    console.log("server started at PORT: "+ PORT);
})