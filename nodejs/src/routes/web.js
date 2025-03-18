const express = require('express');
const router = express.Router();
const { getHomepage } = require('../controllers/homeController') 

router.get('/', getHomepage );

// router.post('/create-user', postCreateUser)

module.exports = router;