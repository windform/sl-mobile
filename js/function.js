function loadUrl(url){
  $.ajax({
	  url:url,
	  type:'get',
	  success: function(data){
		  $('.loading').css('opacity',0);
		  $('.sl_content').html(data)
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

function headerBar(title,icon,right_font){
    var style = '<div class="bar bar-header bar-dark"><a class="button icon-left ion-ios-arrow-back button-clear button-light"></a><h1 class="title">'+title+'</h1><a class="button icon-right '+icon+' button-clear button-light">'+right_font+'</a></div>';
    $("body").append(style);
}

function subHeaderBar(left_icon,left_font,title,right_icon,right_font){
    var style=' <div class="bar bar-subheader bar-light"><a class="button icon-left '+left_icon+' button-clear button-dark">'+left_font+'</a><h1 class="title">'+title+'</h1><a class="button icon-right '+right_icon+' button-clear button-dark">'+right_font+'</a></div>'
     $("body").append(style);
}