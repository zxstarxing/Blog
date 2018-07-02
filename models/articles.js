var mongoose = require("mongoose");

var articleSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true   
    },
    createdatetime:{
        type:String,
        required:true
    }
})

let Article = module.exports = mongoose.model("Article",articleSchema);