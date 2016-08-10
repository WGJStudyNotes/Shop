var db=require('./db');
exports.getAll=function(callback){
    sql='select prod.*,img.img_src from t_product prod, t_product_img img where prod.prod_id=img.prod_id';
    db.query(sql,[],callback);
};
exports.getById=function(productId,callback){
    var sql1='select * from t_product where prod_id=?';
    var sql2='select * from t_product_img where prod_id=?';
    var sql3='select * from t_product_size where prod_id=?';
    db.query(sql1,[productId],function(rs){
        db.query(sql2,[productId],function(rs1){
            rs[0].productImg=rs1;
            db.query(sql3,[productId],function(rs2){
                rs[0].productSize=rs2;
                callback(rs);
            })
        })
    })
}