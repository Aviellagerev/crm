const mongoose = require("mongoose")

const faultSchema = mongoose.Schema(
    {
        date:{
            type:Date,
            require:true,
        },
        mainFamily:{
            type:String,
            require:true,
        },
        secondFamily:{
            type:String,
            require:true,
        },
        userNumber:{
            type:Number,
            require:true,

        },
        clientNumber:{
            type:Number,
            require:true,
            
        },
        description:{
            type:String,
            require:true,
        },
        solution:{
type:String,

        }
    }
);
const Form =mongoose.model('Form',faultSchema);

module.exports = Form;