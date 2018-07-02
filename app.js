/*reference Express framework */
var express = require("express");
var path = require("path");
var mongoose = require("mongoose");

mongoose.connect("mongodb://zhangxing:zhangxing1@ds161960.mlab.com:61960/zxstarxingblog");
let db = mongoose.connection;

db.on("open",()=>{
    console.log("Conected to Mongodb");
})

db.on("error",(error)=>{
    console.log(error);
})

var app = express();

app.use(express.static("public"));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');


let Article = require('./models/articles');

app.get('/',(req,res)=>{
    Article.find({},(error,articles)=>{
        res.render("index",{articles});
    })
    
})

app.listen(5000);

console.log('listening port on 5000');