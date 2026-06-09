const express = require('express');
const router = express.Router();

// spliting the api into different routes
router.use('/users',require('./users/routes'))
router.use('/movies',require('./movies/routes'))

module.exports=router;