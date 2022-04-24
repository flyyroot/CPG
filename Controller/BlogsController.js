const Index = (req,res)=>{
    res.status(200).render('index',{title:'index'})
}
const Tentang = (req,res)=>{
    res.status(200).render('index',{title:'tentang'})
}

module.exports = {Index}