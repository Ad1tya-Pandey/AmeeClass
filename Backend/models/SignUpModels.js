const mongoose =require('mongoose')
const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
    batchcode:{
        type:String,
        required:true
    },
    snumber:{
        type:String,
        required:true
    },
     pnumber:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('AmeeClasse',signUpTemplate)
