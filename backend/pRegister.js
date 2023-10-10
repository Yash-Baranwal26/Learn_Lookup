var mongoose = require('mongoose');

var data = new mongoose.Schema({
    pname:String,
    email:String,
    address:String,
    mobile:String,
    password:String,
})

module.exports = mongoose.model("pRegister",data)