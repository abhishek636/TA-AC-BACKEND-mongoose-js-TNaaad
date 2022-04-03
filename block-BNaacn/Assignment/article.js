var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String,
    tags: String,
    createdAt:{type:String,default: new Date()},
    likes:{type:Number, default: 0}
});

//create model for article schema created above and export it.
let Article = mongoose.model("Article", articleSchema);
module.exports= Article;
