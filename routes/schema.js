var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {

        name : {type : String , required : true},
        father : {type : String , required : true},
        education : {type : String},
        email : {type : String },
        cell : {type : Number}
    }
);

exports.userModel = mongoose.model ( 'applicants' , userSchema);