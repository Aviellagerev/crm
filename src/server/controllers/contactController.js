const Contact = require('../models/contactModel');
const asyncHandler = require('express-async-handler');

const addContact =  asyncHandler(async(req,res)=>{
    const {personalNumber,clientNumber,description,solution,date,readyForm
        
    }=req.body
  

const contact= await Contact.create({
   personalNumber,
   clientNumber,
   description,
   solution,
   date,
   readyForm

});

if(contact){
    res.status(201).json({
      peronalNumber:contact.peronalNumber,
      clientNumber:contact.clientNumber,
      description:contact.description,
      solution:contact.solution,
      date:contact.date,
      readyForm:contact.readyForm
    })
}
else{
    res.status(400)
    throw new Error ("new error accurd");
}
});
const getContact = asyncHandler(async(req,res)=>{

    const notes = await Contact.find()
        res.json(notes);
})
module.exports ={addContact, getContact}
