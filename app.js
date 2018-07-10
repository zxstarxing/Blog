/*reference Express framework */
var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var session = require('express-session')

mongoose.connect("mongodb://zhangxing:zhangxing1@ds161960.mlab.com:61960/zxstarxingblog");
let db = mongoose.connection;

db.on("open",()=>{
    console.log("Conected to Mongodb");
})

db.on("error",(error)=>{
    console.log(error);
})

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

let Article = require('./models/articles');

let articleRouter = require('./routers/articles');
app.use('/articles',articleRouter);

app.get('/',(req,res)=>{
    Article.find({},(error,articles)=>{
        res.render("index",{articles});
    })
    
})

app.listen(5050);

console.log('listening port on 5050');