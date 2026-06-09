
const express = require('express');
const router = express.Router();
const _m=require('./controller');



// get all movies
router.get('/all',_m.getAllMovies);
router.get('/:id',_m.getMovieById);
router.post('/create',_m.createMovie);
router.put('/:id',_m.updateMovie);
router.delete('/:id',_m.deleteMovie);

module.exports=router;