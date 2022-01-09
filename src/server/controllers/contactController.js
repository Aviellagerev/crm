const Contact = require('../models/contactModel');
const asyncHandler = require('express-async-handler');

const addContact =  asyncHandler(async(req,res)=>{
    const {personalNumber,clientNumber,solution,date
        
    }=req.body
  

const contact= await Contact.create({
   personalNumber,
   clientNumber,
   solution,
   date,

});

if(contact){
    res.status(201).json({
      peronalNumber:contact.peronalNumber,
      clientNumber:contact.clientNumber,
      solution:contact.solution,
      date:contact.date,
    })
}
else{
    res.status(400)
    throw new Error ("new error accurd");
}
});
module.exports ={addContact}