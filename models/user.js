// models/user.js

const {sequelize,Sequelize}=require('../util/database');

module.exports=(sequelize,Sequelize)=>{
    const User = sequelize.define('User', {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true, // Set email as the primary key
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        phone: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
      });
      return User;
}

 

 
