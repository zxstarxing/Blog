const express = require('express');

let router = express.Router();

let Article = require('../models/articles');

router.get('/new',(req,res)=>{
    res.render('articles/add',{
        title:'Add Article'
    })
})

router.get('/content/:id',(req,res)=>{
    Article.findById({_id:req.params.id},(error,article)=>{
        if(error){
            console.log(error);
            return;
        }
        else
        {
            res.render('articles/form',{article});
        }
    })
})

router.post('/add',(req,res)=>{
    let article = req.body;
    article.createdatetime = new Date();
    let articleModel = new Article(article);
    articleModel.save((error)=>{
        if(error){
            console.log(error);
            return;
        }
        else
        {
            res.send('save ok');
            res.redirect('/')
        }
    })
})

module.exports = router;
