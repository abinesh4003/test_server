
const users = require('./model');

module.exports.getAllUsers=async (req,res)=>{
    try{
        const allUsers=await users.find();
        res.status(200).json(allUsers);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports.getUserById=async (req,res)=>{
    const id=req.params.id;
    try{
        const user= await users.findById(id);
        if(!user){
            return res.status(404).json({error: 'User not found'});
        }
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports.createUser=async (req,res)=>{
    const {name,email,age}=req.body;
    try{
      const newUser=await users.create({name,email,age});
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports.updateUser=async (req,res)=>{
    try{
        const id=req.params.id;
        const {name,email,age}=req.body;
        const updatedUser=await users.findByIdAndUpdate({_id:id},{name,email,age},{new:true});
        if(!updatedUser){
            return res.status(404).json({error: 'User not found'});
        }
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports.deleteUser=async (req,res)=>{
    try{
        const id=req.params.id;
        const deletedUser=await users.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).json({error: 'User not found'});
        }
        res.status(200).json({message: 'User deleted successfully'});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}