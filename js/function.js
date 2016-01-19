function loadUrl(url){
  $.ajax({
	  url:url,
	  type:'get',
	  success: function(data){
		  $('.loading').css('opacity',0);
		  $('.frame_content').html(data)
		  }
	  })	
};

function loadSecondUrl(url){
    $.ajax({
        url: url,
        type: 'get',
        success: function (data) {
            //$('.loading').css('opacity',0);
            $('.main_body').html(data)
        }
    });
    return false;
}

function exchange(){
       $(".exchange").css({
            left:($(".exchange").parent().width()-52)/2,
            top:($(".exchange").parent().height()-47)/2
      });

}
function header(ele,title){
    var style = '<div class="bar bar-header bar-dark"><h1 class="title">'+title+'</h1></div>';
    $(ele).html(style);
}

function headerBar(title,icon,right_font){
    var style = '<div class="bar bar-header bar-dark"><a class="button icon-left ion-ios-arrow-back button-clear button-light"></a><h1 class="title">'+title+'</h1><a class="button icon-right '+icon+' button-clear button-light">'+right_font+'</a></div>';
    $("body").append(style);
}

function subHeaderBar(left_icon,left_font,title,right_icon,right_font){
    var style=' <div class="bar bar-subheader bar-light"><a class="button icon-left '+left_icon+' button-clear button-dark">'+left_font+'</a><h1 class="title">'+title+'</h1><a class="button icon-right '+right_icon+' button-clear button-dark">'+right_font+'</a></div>'
     $("body").append(style);
}

function footerTabs(){
	var html='<div class="tabs tabs-icon-top tabs-dark" id="bottom-tabs">'
		+'<a class="tab-item tab-active" data-href="templets/index.html"><i class="icon ion-home"></i>首页</a>'
		+'<a class="tab-item" data-href="templets/order.html"><i class="icon ion-document"></i>订单</a>'
		+'<a class="tab-item" data-href="templets/action.html"><i class="icon ion-podium"></i>活动</a>'
		+'<a class="tab-item" data-href="templets/service.html"><i class="icon ion-pinpoint"></i>服务</a>'
		+'<a class="tab-item" data-href="templets/person.html" ><i class="icon ion-person"></i>我的</a>'
	+'</div>';
	$(".frame_footer").append(html);
	
	}