var userModel=require('../models/userModule');
exports.index=function(req,res){
    var user=req.session.user;
    if(user){
                res.render('index',{loginUser:user});
    }else{
                res.render('index',{loginUser:null});
    }
}


//exports.index=function(reg,res){
//    res.render('index',{});
//};
exports.login=function(reg,res){
    res.render('login');
};
exports.regist=function(reg,res){
    res.render('regist');
};
exports.checklogin=function(req,res){
    var uname=req.body.username;
    var pwd=req.body.pass;
    userModel.getByNameAndPwd(uname,pwd,function(rs){
        if(rs.length>0)
        {
            var user=rs[0];
            req.session.user=user;
            res.redirect('/');
        }
    });
};
exports.checkLogin=function(req,res){
    var user=req.session.user;
    if(user){
        res.send('success');
    }else{
      res.send('fail');
    }
}