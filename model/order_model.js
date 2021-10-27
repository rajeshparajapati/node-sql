const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Orders = sequelize.define("orders",{
               
        order_id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        amount:{
            type:Sequelize.FLOAT,
            allowNull:false
        }
        
});

module.exports = Orders;