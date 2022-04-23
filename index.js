// const urlencoded = require('body-parser/lib/types/urlencoded')
const express = require('express')
const connectToDB = require('./Server/KoneksiDb')
const app = express()
const dotenv = require('dotenv').config()
const route = require('./Server/Router/userRouter')
const port = process.env.PORT || 4000

app.listen(port,()=>console.log(`Port berjalan pada port ${port}`))
connectToDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/comment',route)