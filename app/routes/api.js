var User = require('../models/user');


module.exports = function(router){
    router.post('/users',function(req,res){
        var user = new User();
    
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
    
        if(req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == ''){
            res.send("Ensure UserName , Password , Email is Provided");
        }else{
            user.save(function(err){
                if(err) res.send(err);
                    else
                        res.send("User Created");
            });
        }
    });

    router.get('/',function(req,res){
        res.send("Default Page");
    });
    
    router.get('/home',function(req,res){
        res.send("Home Page");
    });

    return router; 
} 