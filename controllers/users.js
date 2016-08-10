var userModule=require('../models/userModule');
exports.regist=function(req,res){
    var name=req.body.username;
    var pwd=req.body.password;
    var sex=req.body.sex;
    userModule.save({
        username:name,
        password:pwd,
        sex:sex
    },function(result){
        if(result.affectedRows>0){
            res.redirect('/login');
        }
    });
};
exports.checkUser=function(req,res){
    var username=req.query.username;
    userModule.getByName(username,function(rs){
        if (rs.length>0){
            res.send('file');
        }else{
            res.send('success');
        }
    });
};