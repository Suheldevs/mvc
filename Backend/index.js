const express = require('express');
const app = express();
app.use(express.json());

const {connectMongoDb} = require('./connection');
const userRouter = require('./routes/user');
const dotenv = require('dotenv')
dotenv.config();
connectMongoDb(process.env.MONGO_URI);


app.use('/user',userRouter);

app.listen(3000,()=>{
    console.log('server is ruuning on port 3000');
})