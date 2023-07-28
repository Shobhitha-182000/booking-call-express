const { sequelize, Sequelize } = require('../util/database');
const user=require('../models/user')(sequelize,Sequelize);
const path=require('path');
const pathDir=require('../util/path');

exports.displayUserForm = (req, res, next) => {
    res.sendFile(path.join(__dirname,'..', 'views', 'book.html'));
  };

exports.saveUser=(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    user.create({
        name:name,
        email:email,
        phone:phone,
    })
    .then(result=>{
        res.redirect('/book');
        console.log( 'INSERTED....')
    })
    .catch(err=>console.log(err));
}

exports.getAll=(req,res,next)=>{
    user.findAll()
    .then(users=>{
        res.json(users);
    })
    .catch(err=>console.log(err));
}

//delete
exports.deleteByEmail=(req,res,body)=>{
    const userEmail=req.params.email;
    user.destroy({where:{email:userEmail}})
    .then(deletedRows=>{
        if(deletedRows>0){
            res.json({ message: 'User deleted successfully.' });
        }else{
            res.status(404).json({ message: 'User not found.' }); 
        }
    })
    .catch(err=>console.log(err));
}

// Controller function to update a user by ID
exports.updateUser = (req, res, next) => {
    const userEmail = req.params.email;
    const { name, phone } = req.body;
  
    user.findByPk(userEmail)
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found.' });
        }
        user.name = name;
        user.phone = phone;
        user.save()
          .then(updatedUser => {
            res.json(updatedUser);
          })
          .catch(err => {
            res.status(500).json({ error: 'Failed to update user.' });
          });
      })
      .catch(err => {
        res.status(500).json({ error: 'Failed to fetch user.' });
      });
  };
  