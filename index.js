var express = require('express');
var cors = require ('cors');
var mongoose = require('mongoose');
var schema = require('./routes/schema');
var userModel = schema.userModel;
var app = express();
app.use(cors());

var uri =  "mongodb+srv://asdf:asdf@cluster0-v4e3c.mongodb.net/applicant?retryWrites=true&w=majority";
mongoose.connect(uri , {useNewUrlParser : true});


userModel.find({cell : {$gte : 3000000}} , function (error ,data) {
    console.log(data);
    console.log(error);
})

app.set('port', process.env.PORT || 6000 );
var server = app.listen( app.get('port') , function () {

    console.log('Express server is listening at port' + server.address().port)
});
    




