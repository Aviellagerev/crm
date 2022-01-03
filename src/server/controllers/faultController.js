const Form = require('../models/faultModel');
const asyncHandler = require('express-async-handler');

const addForm = asyncHandler(async(req,res)=>{
    const {date,mainFamily,secondFamily,userNumber,clientNumber,solution}=req.body
console.log(req.body);
const form= await Form.create({
    date,
    mainFamily,
    secondFamily,
    userNumber,
    clientNumber,
    solution

});
if(form){
    res.status(201).json({
        date:form.date,
        mainFamily:form.mainFamily,
        secondFamily:form.secondFamily,
        userNumber:form.userNumber,
        clientNumber:form.clientNumber,
        solution:form.solution,
    
        
    })
}
else{
    res.status(400)
    throw new Error ("new error accurd");
}
});
module.exports ={addForm}
