const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const cryptPassword = require('../middlewares/bcrypt')

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getSingleUser)
router.post('/', cryptPassword, userController.addUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.removeUser)

module.exports = router;