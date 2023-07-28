const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userControllers');

router.get('/book',userController.displayUserForm );
router.post('/book',userController.saveUser);

router.get('/get-all-users',userController.getAll);
//delete by primary key email
router.delete('/book/delete/:email',userController.deleteByEmail);
router.put('/book/update/:email',userController.updateUser);

module.exports = router;
