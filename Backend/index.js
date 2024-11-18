const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv')
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('db connected successfully'))
.catch((err)=>console.log('db not connected',err))


//schema
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})
//model
const userModel = mongoose.model('userModel',userSchema);

//api post
app.post('/user/post',async(req,res)=>{
    try{
const {name,email,password}=req.body;
if(!name || !email || !password){
    return res.status(400).json({message:'Please fill all the fields'});
}
const newUser = new userModel({
    name,email,password
});
await newUser.save();
res.status(201).json({message:'User data save succesfully ',userdata:newUser})
    }
    catch(err){
        res.status(201).json({message:'Internal Error',Error:err})
    }
})

app.listen(3000,()=>{
    console.log('server is ruuning on port 3000');
})