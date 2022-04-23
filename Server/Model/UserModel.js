const mongoose = require('mongoose')

const modelTabel = new mongoose.Schema({
    postId:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    }

})

module.exports = mongoose.model('comments',modelTabel)