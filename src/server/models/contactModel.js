const mongoose = require("mongoose")

const contactSchema = mongoose.Schema(
    {
        personalNumber:{
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
            require:true,
        },
        date:{
            type:Date,
            require:true,
        },
    }
);
const  Contact =mongoose.model('Contact ',contactSchema);

module.exports = Contact;