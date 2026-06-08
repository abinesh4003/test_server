
const express = require('express');
const router = express.Router();
const _u=require('./controller');



// get all users
router.get('/all',_u.getAllUsers);
router.get('/:id',_u.getUserById);
router.post('/create',_u.createUser);
router.put('/:id',_u.updateUser);
router.delete('/:id',_u.deleteUser);
module.exports=router;