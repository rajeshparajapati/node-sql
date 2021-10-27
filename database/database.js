const Sequelize  = require('sequelize');

const sequelize = new Sequelize('nodeseql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;