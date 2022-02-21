const mongoose = require('mongoose')


const userSchema = mongoose.Schema(
    {
        personalNumber:{
            type:Number,
            require:true,
        },
        namaUser:{
            type:Boolean,
        },
        clearance:{
            type:String,
        },
        phonenumber:{
            type:Number,
            require:true,

        },
        fname:{
            type:String,
            
        },
        unit:{
type:String,

        }
    }
);
const User=mongoose.model('User',userSchema);

module.exports = User;















