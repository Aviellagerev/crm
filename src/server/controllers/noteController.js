const Form = require('../models/faultModel');
const asyncHandler = require('express-async-handler');

const getNotes = asyncHandler(async(req,res)=>{

    const notes = await Form.find()
        res.json(notes);
})
module.exports = {getNotes};