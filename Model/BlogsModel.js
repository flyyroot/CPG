const mongoose = require('mongoose')

const mySchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        trim:true
    },
    post:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        trim:true
    }
},
    {timestamps:true}
)

module.exports = mongoose.model('Blogs',mySchema)