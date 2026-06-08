const express = require('express');
const router = express.Router();

// spliting the api into different routes
router.use('/users',require('./users/routes'))
// router.use('/posts',require('./posts/routes'))

module.exports=router