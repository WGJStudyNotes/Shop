var db=require('./db');

exports.save=function(user,callback){
    var  post={username:user.username,password:user.password,sex:user.sex};
    var sql="insert into t_user set ?"
     //db.query("insert into t_user(username,password,sex) values('"+user.username+"','"+user.password+"','"+user.sex+"')");
    db.query(sql,post,callback);
};
exports.getByName=function(user,callback){
    var sql="select * from t_user where username=?";
    db.query(sql,[user],callback);
};
exports.getByNameAndPwd=function(username,password,callback){
    var sql='select * from t_user where username=? and password=?';
    db.query(sql,[username,password],callback);
};