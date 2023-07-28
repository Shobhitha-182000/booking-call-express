const Sequelize = require("sequelize");

const sequelize = new Sequelize("booking_call", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
//models
db.user=require('../models/user')(sequelize,Sequelize);

module.exports = db;
