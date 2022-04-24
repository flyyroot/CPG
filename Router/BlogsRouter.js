const express = require('express')
const app = express()
const router = express.Router()
const {Index} = require('../Controller/BlogsController')

//index
router.get('/',Index)
module.exports = router