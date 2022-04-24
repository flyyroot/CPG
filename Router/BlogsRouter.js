const express = require('express')
const app = express()
const router = express.Router()
const {Index,isiBlog,Search,updateBlog,deleteBlog} = require('../Controller/BlogsController')

//index
router.get('/',Index)
router.get('/:id',Search)
router.post('/',isiBlog)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)
module.exports = router