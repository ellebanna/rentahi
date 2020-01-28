const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = Schema({
    firstname: {type: String,required:true},
    lastname:{type: String,required:true},
    email:{type: String,required:true},
    username:{type: String,required:true},
    contact:{type:Number,required:true},
    password:{type: String,required:true},
});

var User = mongoose.model("User", userSchema);
module.exports = User;