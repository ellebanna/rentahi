const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var itemSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    }, 
    image:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}, {
    collection: "item"
})

var AccountSchema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    collection: "account"
});
let Account = mongoose.model('account', AccountSchema);
let Item = mongoose.model('item', itemSchema);

module.exports = {
    Account,
    Item
}