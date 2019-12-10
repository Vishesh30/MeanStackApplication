var mongoose = require('mongoose');

//Connect to Mongo DB
var connectMongoDB = function(){
    mongoose.connect('mongodb://localhost:27017/meanApp',function(err,){
        if(err) console.log("Error while connecting to DB!");
            else
                console.log("Connected to MongoDB");
    });
};  

module.exports ={
    connectMonogDB: connectMongoDB
};
