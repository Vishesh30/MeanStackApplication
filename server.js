var express = require('express');
var morgan  = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var dbInterface = require('./app/db/dbInterface');
var path  = require('path');

var app = express();
var port = process.env.port || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/ui/dist/ui'));
app.use('/api',appRoutes);

//Connect to DB
dbInterface.connectMonogDB();

//Redirect all the request which is not to a valid path to index.html page
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname + '/ui/dist/ui/index.html'))
})

//Log to inform the start of sever and port details
app.listen(port,function(){
    console.log("Running the Server on port " + port);
}); 