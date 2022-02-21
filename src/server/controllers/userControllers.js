const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const Adduser = asyncHandler(async(req,res) => {
  
    const {personalNumber,namaUser,clearance,phonenumber,fname,unit} = req.body;
    const userExists = await User.findOne({personalNumber});
   console.log(userExists)
    if(userExists){ 
        res.status(400)
        throw new Error('user Already exists')
    }
   
    const user = await User.create({
        personalNumber,
        namaUser,
        clearance,
        phonenumber,
        fname,
        unit
    });

    if(user){
        res.status(201).json({
            personalNumber:user.personalNumber,
            namaUser:user.namaUser,
            clearance:user.clearance,
            phonenumber:user.phonenumber,
            fname:user.fname,
            unit:user.unit,

        })
    }
    else{
        res.status(400)   
        throw new Error("error accurd");
    }
});
module.exports = {Adduser};