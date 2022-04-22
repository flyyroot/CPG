const express = require('express')
const app = express()
const port = process.env.port ||200
app.use(port,()=>console.log(`APlikasi berjalan pada port ${port}`))
