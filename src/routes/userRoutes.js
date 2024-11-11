const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User create
router.post('/', userController.createUser);

// GET all users
router.get('/', userController.getAllUsers);

// Get an user by ID
router.get('/:id', userController.getUserById);

// User update
router.put('/:id', userController.updateUser);

// User delete
router.delete('/:id', userController.deleteUser);

module.exports = router;
