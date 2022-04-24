const Blogs = require('../Model/BlogsModel')
const Index = (req,res)=>{
    Blogs.find().then(blog=>{
        res.json(blog).status(200).render('index',{title:'index'})
    })
    .catch(err=>res.status(400).json('Errror'+err))
 
}
const Tentang = (req,res)=>{
    res.status(200).render('index',{title:'tentang'})
}

const isiBlog = (req,res)=>{
   const content = {
        username:req.body.username,
        post:req.body.post,
        email:req.body.email
    }
    const newBlog = new Blogs(content)
    newBlog.save()
    .then(()=>res.json('User berhasil ditambahkan'))
    .catch(err=>console.log(`ada kesalahan pada ${err}`))
}

const Search = (req,res)=>{
        Blogs.findById(req.params.id)
        .then(data=>res.json(data))  
        .catch(err=>console.log(err))  
}

const updateBlog = (req,res)=>{
    Blogs.findById(req.params.id)
    .then(blog=>{
        blog.username = req.body.username,
        blog.post = req.body.post,
        blog.email = req.body.email
        blog.save()
        .then((ublog)=>res.json(ublog))
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
}

const deleteBlog = (req,res)=>{
    Blogs.findByIdAndDelete(req.params.id)
    .then((new_blog)=>res.json(new_blog))
    .catch(err=>console.log(err))
}


module.exports = {Index,Tentang,isiBlog,Search,updateBlog,deleteBlog}