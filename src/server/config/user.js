var MongoClient = require("mongodb").MongoClient;
const env =require('dotenv').config({ path:'../../.e' });

const findUser = async(personalNumber)=>{

   
   try {
    const collection = db.collection('users');
    let user = collection.findOne({personalNumber});
    if(!user){
      return false;
    }
    return true;
  } catch (error) {
    throw error;
  }

}
module.exports = findUser
