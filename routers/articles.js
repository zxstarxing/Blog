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

router.get('/content/:id/edit',(req,res)=>{
    Article.findById({_id:req.params.id},(error,article)=>{
        if(error){
            console.log(error);
            return;
        }
        else
        {
            res.render('articles/edit',{article});
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
            req.flash("success", "Add Article Success");
            res.redirect('/')
        }
    })
})


router.post('/update/:id',(req,res)=>{
    Article.update({_id:req.params.id},req.body,(error)=>{
        if(error){
            console.log(error);
            return;
        }
        else
        {
            req.flash("success", "Update Article Success");
            res.redirect('/')
        }
    })
})

router.delete('/:id',(req,res)=>{
    Article.remove({_id:req.params.id},(error)=>{
        if(error){
            console.log(error);
            return;
        }
        else
        {
            req.flash("info", "Delete Article Success");
            res.send('danger');
        }
    })
})

module.exports = router;
