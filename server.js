const express =require('express')
const cors=require('cors');
const mongoose=require('mongoose')
require('dotenv').config();
const app=express();
app.use(cors())
app.use(express.json())

const localURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST1}/${process.env.MONGODB_DBNM}`;

async function connectDB() {
    try{
        await mongoose.connect(localURI);
        console.log('connected to database ');
    }
    catch(err){
        console.log(err)
    }
}

connectDB();

// api point routes url 'api'
app.use('/api',require('./index'))

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})