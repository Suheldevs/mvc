const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../Controllers/userController');

// Define API endpoints
router.get('/', getUsers); // GET /users
router.post('/', createUser); // POST /users

module.exports = router;
