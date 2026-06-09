

const movies = require('./model');
var exports = {};
exports.getAllMovies=async (req,res)=>{
    try{
        const allMovies=await movies.find().limit(20);  
        res.status(200).json(allMovies);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.getMovieById=async (req,res)=>{
    const id=req.params.id;
    try{
        const movie= await movies.findById(id);
        if(!movie){
            return res.status(404).json({error: 'Movie not found'});
        }
        res.status(200).json(movie);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.createMovie=async (req,res)=>{
    const {title,genre,year}=req.body;
    try{
      const newMovie=await movies.create({title,genre,year});
        res.status(201).json(newMovie);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.updateMovie=async (req,res)=>{
    try{
        const id=req.params.id;
        const {title,genre,year}=req.body;
        const updatedMovie=await movies.findByIdAndUpdate({_id:id},{title,genre,year},{new:true});
        if(!updatedMovie){
            return res.status(404).json({error: 'Movie not found'});
        }
        res.status(200).json(updatedMovie);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.deleteMovie=async (req,res)=>{
    try{
        const id=req.params.id;
        const deletedMovie=await movies.findByIdAndDelete(id);
        if(!deletedMovie){
            return res.status(404).json({error: 'Movie not found'});
        }
        res.status(200).json({message: 'Movie deleted successfully'});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports=exports;