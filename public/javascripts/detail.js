$(function(){
    var $productPrice=$('.product-price');
    var $productSize=$('#product-size');
    $('#d-size li').on('click',function(){
        $productPrice.html($(this).data('price'));
        $productSize.val($(this).html());
    });
    $('#product-num').num({
        max:50,
        isEdit:false
    });
    var $idSelect=$('#id-select');
    var $idLi=$('li',$idSelect);
    var $ImgInf=$('#img-inf');
    var $iMg=$('img',$ImgInf);
    $idLi.on('click',function(){
        var $src=$('img',$(this)).attr('src');
        console.log($src);
        $iMg.attr('src',$src);
        $(this).addClass("selected").siblings().removeClass('selected');
    })
    $("#product-from").on("submit",function(){
        var that=this;
        $.get('/checkLogin',function(rs){
            if(rs=="fail"){
                alert('您未登录！');
            }else{
                alert('购买成功！');
            }
        })
        return false;
    });
});