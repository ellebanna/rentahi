const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  username:{type: String,required:true},
  image:{type: String,default: "none",required: true},
  imageData : {type : String,required : true},
  title: {type: String,required:true},
  category: {type: String,required:true},
  brand: {type: String,required:true},
  price: {type: Number,required:true},
  description:{type: String,required:true},
  postDate: {type: Date},
});

const Post = mongoose.model("Post", userSchema);
module.exports = Post;