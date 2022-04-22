const mongoose = require('mongoose')

const koneksiDB = async ()=>{
    try{
        k = await mongoose.connect('mongodb+srv://miel:miele@cluster0.ztwxt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log(`Database berjalan ${k.connection.host}`) 
    }
    catch (err){
        console.log(err)
    }
     
}

module.exports=koneksiDB