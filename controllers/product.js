var productModule=require('../models/productModule')
exports.list=function(req,res){
    productModule.getAll(function(rs){
        res.send(rs);
    });
};
exports.detail=function(req,res){
    var productId=req.query.productId;
    productModule.getById(productId,function(rs){
        var user=req.session.user;
        if(user){
            res.render('detail',{product:rs[0],loginUser:user});
        }else{
            res.render('detail',{product:rs[0],loginUser:null});
        }
    })
    //res.send(productId);
    //res.render('detail');
};