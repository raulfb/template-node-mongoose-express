const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user.controller')

router.post('/users/', usercontroller.createUser)// C 
router.get('/users/',usercontroller.getAllUsers)// R
router.get('/users/:user_id',usercontroller.getUserById);// R
router.put('/users/:user_id',usercontroller.updateUser);// U
router.delete('/users/:user_id',usercontroller.deleteUser);// D

module.exports = router
