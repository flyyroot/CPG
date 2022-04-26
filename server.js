const express = require('express')
const connectToDB = require('./Server/KoneksiDb')
const app = express()
const dotenv = require('dotenv').config()
const BlogsRouter = require('./Router/BlogsRouter')
const port = process.env.PORT || 4000
const path = require('path')
// app.set('view engine', 'ejs')
// app.set(express.static(path.join(__dirname,'../express_mongodb/plugins/css/plugins/')))
// app.set('views',path.join(__dirname,'../express_mongodb/views'))
app.listen(port,()=>console.log(`Port berjalan pada port ${port}`))
app.use(express.static(path.join(__dirname, 'build')));
// MONGODB
connectToDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/blogs',BlogsRouter)


