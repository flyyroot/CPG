const comments = require('../Model/UserModel')
const asyncExpress = require('express-async-handler')
const postComment = asyncExpress(async(req,res)=>{
        const isi_data = await comments.create(
            {
                postId:req.body.postId,
                name:req.body.name,
                email:req.body.email,
                body:req.body.body
            }
            
        )
        // const dd = await isi_data.save();
        res.status(200).json(dd)
        console.log(isi_data)
    
   
})
const getComment = asyncExpress(async(req,res)=>{
    try{
        const isi_data = await comments.find()
     
            res.status(200).json(dd)
        console.log(isi_data)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = {postComment,getComment}