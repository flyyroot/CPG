const mongoose = require('mongoose')
const connectToDB = async ()=>{
    try{
         mongoose.connect(process.env.APP_DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        const connection = mongoose.connection;
        connection.once('open',()=>{
            console.log(`Database berhasil koneksi pada ${connection.host} `)
        })
    }
    catch (err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectToDB