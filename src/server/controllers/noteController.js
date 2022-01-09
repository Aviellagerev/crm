const Form = require('../models/faultModel');
const asyncHandler = require('express-async-handler');

const getNotes = asyncHandler(async(req,res)=>{
    console.log("got here")
    const notes = await Form.find()
    console.log(notes);
        res.json(notes);
})
module.exports = {getNotes};