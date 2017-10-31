$(function(){
	//导航栏
	jQuery("#nav").slide({ 
		type:"menu",// 效果类型，针对菜单/导航而引入的参数（默认slide）
		titCell:".nLi", //鼠标触发对象
		targetCell:".sub", //titCell里面包含的要显示/消失的对象
		delayTime:200 , //效果时间
		triggerTime:0, //鼠标延迟触发时间（默认150）
		returnDefault:true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
	});
	//导航栏二级菜单定位
//	changeLeft();
	$('.nav .nLi').mousemove(function(){
		$('.nav .nLi').eq(3).children('ul').find('a').css('padding','0 34px');
		var widthU=0;
		for(var i=0;i<$(this).children('ul').children('li').length;i++){
			widthU+=$(this).children('ul').children('li').eq(i).width();
		}
		$(this).children('ul').css({'width':widthU});
		var widthUl3=$('.nav .nLi').eq(3).children('ul').width()+3;
		$('.nav .nLi').eq(3).children('ul').css('width',widthUl3);
		var widthUl4=-$('.nav .nLi').eq(4).children('ul').width()+290;
		$('.nav .nLi').eq(4).children('ul').css('left',widthUl4).children('li').css('float','right');
		var widthUl5=-$('.nav .nLi').eq(5).children('ul').width()+138;
		$('.nav .nLi').eq(5).children('ul').css('left',widthUl5).children('li').css('float','right');
		var widthUl6=-$('.nav .nLi').eq(6).children('ul').width()+138;
		$('.nav .nLi').eq(6).children('ul').css('left',widthUl6).children('li').css('float','right');
		var widthUl7=-$('.nav .nLi').eq(7).children('ul').width()+138;
		$('.nav .nLi').eq(7).children('ul').css('left',widthUl7).children('li').css('float','right');
	})
//	function changeLeft(){
//		$('.nav .nLi').eq(3).children('ul').find('a').css('padding','0 35px');
//		
////		console.log(widthUl4)
////		$('.nav .nLi').eq(4).children('ul').css('left',widthUl4).children('li').css('float','right');
//		$('.nav .nLi').eq(5).children('ul').children('li').css('float','right');
//		$('.nav .nLi').eq(6).children('ul').children('li').css('float','right');
//		$('.nav .nLi').eq(7).children('ul').children('li').css('float','right');
//	}
	//轮播图
	jQuery(".slideBox").slide({
		mainCell: ".bd ul",
		autoPlay: true,
		delayTime:1000
	});
	//通知公告
//	jQuery(".txtScroll-top").slide({
//		titCell:".hd ul",
//		mainCell:".bd ul",
//		autoPage:true,
//		effect:"top",
//		autoPlay:true,
//		vis:3
//	});
	//通知公告向上滚动
//	var speed=0;
//	$('.tzgg_cont ul li').mouseover(function(){
//		clearInterval(timer);
//	});
//	$('.tzgg_cont ul li').mouseout(function(){
//		timer=setInterval(function(){
//			speed+=55;
//			if(speed==$('.tzgg_cont ul').height()){
//				$('.tzgg_cont ul').animate({top:'0'},500);
//				speed=0;
//			}
//			moveUp(speed);
//		},2000);
//	});
//	var timer=setInterval(function(){
//		speed+=55;
//		if(speed==$('.tzgg_cont ul').height()){
//			$('.tzgg_cont ul').animate({top:'0'},200);
//			speed=0;
//		}
//		moveUp(speed);
//	},2000);
//	function moveUp(speed){
//		speed=speed;
//		$('.tzgg_cont ul').animate({top:-speed+'px'},500);
//	}
	
	function rollTwo(){
		$(".tzgg_cont ul").animate({top:"-55px"},500,"linear",function(){
			$(".tzgg_cont ul").css({top:"0px"});
			$(".tzgg_cont ul li:first").remove().clone(true).appendTo(".tzgg_cont ul");	
		})	
	}
	var startRollTwo=setInterval(rollTwo,1000);
//		<!--鼠标移入停止移出继续-->
	$(".tzgg_cont ul").hover(function(){
		clearInterval(startRollTwo);	
	},function(){
		startRollTwo=setInterval(rollTwo,1000);	
	});

	$('.tu_cont li a div').mouseover(function(){
		$(this).parent().find('img').css({'transform':'scale(1.1,1.1)','transition':'0.5s'})
	});
	$('.tu_cont li a div').mouseout(function(){
		$(this).parent().find('img').css({'transform':'scale(1,1)','transition':'0.5s'})
	});
//	$('.contwarp_3 li a').mouseover(function(){
//		$(this).find('img').css({'transform':'scale(1.1,1.1)','transition':'0.5s'})
//	});
//	$('.contwarp_3 li a').mouseout(function(){
//		$(this).find('img').css({'transform':'scale(1,1)','transition':'0.5s'})
//	});
	//移除掉margin-right
	removeMarginR();
	function removeMarginR(){
		$('.mainDiv_3 .contwarp_3 ul li').eq(3).css('margin-right','0');
	}
})
