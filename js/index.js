$(function(){
	// 左边的导航栏
	$("aside li").click(function(){
		$("aside li").children('').removeClass("asdadd");
		$(this).children('').addClass("asdadd");
	})

	// 头部下拉菜单
	var n;
	$(".hasdown").hide();
	$(".poiterdown").hover(function() {
		n = $('.hasdown ul li').length*34+30;
		$(this).children('.hasdown').show();
		$(this).children('.hasdown').stop().animate({'height': n+'px'},500);
		$('.hasdown ul').stop().addClass("downnum");

	}, function() {
		$(this).children('.hasdown').stop().animate({'height': '0px'},100);
		$('.hasdown ul').stop().removeClass("downnum");
		$(".hasdown").hide();
	});
	$('.hasdown ul li').hover(function(){
		$(this).children('').css('color', '#e91f2e');
	}, function() {
		$('.hasdown ul li').children('').css('color','');
	}
	)
	// 头部搜索
	$('.searchdown').css('height', '0px');
	$('.ifind').click(function(event) {
		if ($('.searchdown').css('height')=='0px') {
			$('.searchdown').css('height', '');
		}else{
			$('.searchdown').css('height', '0px');
		}
	});

	// 下拉菜单中的下拉菜单
	$(".anothermenu").hide();
	$(".havemore").hover(function() {
		$(this).children('.anothermenu').show();
	}, function() {
		$(".anothermenu").hide();
	});


    // 屏幕滚动
    var s=0;
    var scorllTimer;
    $(document).mousewheel(function(e,d){
        clearTimeout(scorllTimer);
        scorllTimer=setTimeout(function(){
          $('aside').show();
          $('.botarr').css('overflow', '');
          s=s-d;
    	  if (s<0) {s=0;}
    	  if (s>=0&&s<=3) {
          	$('section').animate({'top':-100*s+'%'}, 400);
    	  }
    	  if(s>3) {
    	  	if (s<5) {
	            $('section').animate({'top':-100*s+50+'%'}, 400);
	            $('aside').hide();
	            $('.botarr').css('overflow', 'hidden');
	    	    s=4; 
    	  	}else{
    	  		s=4; 
    	  	}
    	  }
          $('aside ul li').children('span').removeClass('asdadd');
          $('aside ul li').eq(s).children('span').addClass('asdadd');
        },1000)
    })
	// 屏幕一轮播图
	$(".botpot li").hover(function() {
		$(this).css('background-color', 'red');
	}, function() {
		$(".botpot li").css('background-color', '#f6f6f6');
	});
})
