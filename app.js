/*reference Express framework */
var express = require("express");
var path = require("path");

var app = express();

app.use(express.static("public"));

app.set('view engine', 'pug');


app.get('/',(req,res)=>{
    res.render("index");
})

app.listen(5000);

console.log('listening port on 5000');