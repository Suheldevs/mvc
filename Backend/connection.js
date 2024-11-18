const mongoose = require('mongoose');


async function connectMongoDb(url){
    return mongoose.connect(url).then(()=>console.log('connected'));

} 
module.exports = {
    connectMongoDb,
};