$(function(){
	var $aA=$('.head-a','#header-ul');
	var $sMenu=$('#secondary-menu');
	var $Ali=$('li',$sMenu);
	var $opan=$('#opan');
	var $header=$('#header');
	$header.on('mouseover',function(e){
		var target= e.target;
		console.log(target);
		if(target.id=='opan'){
			$sMenu.slideDown("slow",function(){});
		}else if(target.className=="secondary-a"||target.id=="secondary-menu"||target.id=="secondary-ul"||target.className=="secondary-li"){
			$opan.addClass("select");
		}
		else{
			$sMenu.slideUp("slow",function(){});
			$opan.removeClass("select");
		}
	});
	$aA.on('mouseover',function(){
		$(this).addClass('select');
	});
	$aA.on('mouseout',function(){
		$(this).removeClass('select');
	})
	// 导航结束
	var $bg=$('#background');
	var $img=$('img',$bg);
	var index=0;
	var zIndex=1;
	setInterval(function(){
		$img.eq(index).css('z-index',zIndex++).animate({
			opacity:1
		},1000).siblings().animate({
			opacity:0
		},1000);
		if (index>=1) {
			index=0;
		}else{
			index++;
		}


	},4000);
	// 小轮播图
	var $sUl=$('#small-ul');
	var $tUl=$('#title-ul');
	var sindex=0;
	var $Sign=$('#sign');
	var ali=$('li',$Sign);
	setInterval(function(){
		$sUl.animate({
			left:-320*sindex
		});
		$tUl.animate({
			top:-30*sindex
		});
		ali.eq(sindex).addClass('selected').siblings().removeClass('selected');
		if (sindex>=3) {
			sindex=0;
		}else{
			sindex++;
		}
	},3000);
//   ajax加载
	var $col=$('#show-right .col');
	$.get('/products/list',function(data){
		for (var i=0;i<data.length;i++){
			var html='<li>'+
				'<a href="products/detail?productId=1">'+
				'<img src="'+data[i].img_src+'" alt="">'+
					'</a>'+
				'<p>'+
				'<span class="title">'+data[i].prod_name+'</span>'+
				'<span class="price">'+data[i].prod_price+'</span>'+
				'</p>'
			'</li>';
			var minul=getMinUl();
			minul.append(html);
		}
	},'json');

	function getMinUl(){
		var minul=$col.eq(0);
		for(var i=1;i<$col.length;i++){
			if ($col.eq(i).height()<minul.height()){
				minul=$col.eq(i);
			}
		}
		return minul;
	}
});
