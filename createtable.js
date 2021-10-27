const sequelize = require('./database/database');
const User = require("./model/user_model")
const Order = require("./model/order_model");

User.hasMany(Order);


sequelize
.sync({force:true}).then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})