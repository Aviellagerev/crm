const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async(req,res) => {
  
    const {personalNumber,namaUser,clearance,phone,fname,unit} = req.body;
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
        phone,
        fname,
        unit
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            personalNumber:user.personalNumber,
            namaUser:user.namaUser,
            clearance:user.clearance,
            phone:user.phone,
            fname:user.fname,
            unit:user.unit,

        })
    }
    else{
        res.status(400)   
        throw new Error("error accurd");
    }
});
module.exports = {registerUser};