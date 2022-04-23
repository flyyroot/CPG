const mongoose = require('mongoose')
const connectToDB = async ()=>{
    try{
        const koneksi = await mongoose.connect(process.env.APP_DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Database berhasil koneksi pada ${koneksi.connection.host} `)
    }
    catch (err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectToDB