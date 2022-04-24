const express = require('express')
// const connectToDB = require('./Server/KoneksiDb')
const app = express()
const dotenv = require('dotenv').config()
const router = require('./Router/BlogsRouter')
const port = process.env.PORT || 4000
const path = require('path')
app.set('view engine', 'ejs')
app.set(express.static(path.join(__dirname,'../express_mongodb/plugins/css/plugins/')))
app.set('views',path.join(__dirname,'../express_mongodb/views'))
app.listen(port,()=>console.log(`Port berjalan pada port ${port}`))
// connectToDB()
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use('/comment',route)

app.use('/blogs',router)


