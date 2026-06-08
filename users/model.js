const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is required']
    },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true
    },
     age: {
        type: Number
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports= mongoose.model('User', userSchema);