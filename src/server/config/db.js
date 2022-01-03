const mongoose = require("mongoose")
const env =require('dotenv').config({ path:'../../.e' });
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,

        })
        console.log(`mongodb connected:${conn}`)
    } catch(error){
        console.log(`error:${error}`)
    }
}

module.exports = connectDB;