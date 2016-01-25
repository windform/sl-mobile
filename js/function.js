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

 function output(){
          var city='<div class="city"><div class="bar bar-header bar-dark"><a class="button icon-left ion-ios-arrow-back button-clear button-light"></a><h1 class="title">选择城市</h1></div><div class="list list-inset" style="margin-top:55px; margin-bottom:10px"><label class="item item-input"><i class="icon ion-search placeholder-icon"></i><input type="text" placeholder="请输入城市名"></label></div><div class="citylist"></div><div class="catalog"></div></div>';
            $(city).appendTo('body');
            $('.city,.citylist').animate({left:0},600,'ease-in');
            $('.catalog').animate({right:5},600,'ease-in');

        $.ajax({
        url:'data/city.json',
        type:'GET',
        dataType:'JSON',
        success:function(data){
            //var json=JSON.parse(data);   //将json字符串转化为json对象,依赖包
            var json=eval('('+data+')');   //将json字符串转化为json对象
            var citydata=json.data;
            var list='<div class="list city_font">';
            for(var i=0; i<citydata.length; i++){
              list+='<div class="item item-divider" id="'+citydata[i].id+'">'+citydata[i].name+'</div>';
              for(var j=0; j<citydata[i].child.length; j++){
                list+='<a class="item">'+citydata[i].child[j].name+'</a>';
              }
            };
            list+='</div>';
            $('.citylist').html(list);
            //x=null;
            $(".city_font a.item").live('tap',function(){
             // event.stopPropagation;
             var h=$(this).text();
                x=h;
              $(".city_font a.item").css('background','');
              $(this).animate({backgroundColor:'#eee'}, 100);
              $('.city,.citylist').animate({left:500},600,'ease-in');
               $('.catalog').animate({right:-495,opacity:0},600,'ease-in');
              setTimeout(function(){
                  $('.city').remove();
                },850);
              // console.log(x);
             // return x;

            });

            console.log();
            
            var cata='<div>';
            for(var i=0; i<citydata.length; i++){
                cata+='<a href="#'+citydata[i].id+'">'+citydata[i].name+'</a>'
            }
            cata+='</div>';
            $('.catalog').html(cata);
        }
      })
}


function passengerSelectAdd(){
    $('.passenger_staff').remove();
    var pass='<div class="row passenger_staff">'
            +'<div class="col">'
                +'<button class="button button-block button-positive passenger-select">选择常旅客</button>'
                +'<button class="button button-block button-positive passenger-add">添加常旅客</button>'
            +'</div>'
        +'</div>'
    $('body').append(pass);
    $('.passenger_staff').animate({bottom:0}, 300,'ease-in');
}

function normalPassenger(){
     var city='<div class="city"><div class="bar bar-header bar-dark"><a class="button icon-left ion-ios-arrow-back button-clear button-light"></a><h1 class="title">选择常旅客</h1><a class="button icon-right ion-loop button-clear button-light"></a></div><div class="list list-inset" style="margin-top:55px; margin-bottom:10px"><label class="item item-input"><i class="icon ion-search placeholder-icon"></i><input type="text" placeholder="输入姓名或拼音首字母进行筛选"></label></div><div class="citylist"></div><div class="catalog"></div></div>';
            $(city).appendTo('body');
            $('.city,.citylist').animate({left:0},600,'ease-in');
            $('.catalog').animate({right:5},600,'ease-in');

        $.ajax({
        url:'data/passenger.json',
        type:'GET',
        dataType:'JSON',
        success:function(data){
            //var json=JSON.parse(data);   //将json字符串转化为json对象,依赖包
            var json=eval('('+data+')');   //将json字符串转化为json对象
            var passengerdata=json.data;
            var list='<div class="list city_font" style="margin-bottom:0px;">';
            for(var i=0; i<passengerdata.length; i++){
              list+='<div class="item item-divider" id="'+passengerdata[i].id+'">'+passengerdata[i].name+'</div>';
              for(var j=0; j<passengerdata[i].child.length; j++){
                list+='<span class="item">'+'<div class="row"><div class="col col-33"><p>'+passengerdata[i].child[j].name+'</p><p>身份证</p><p>手机/生日</p></div><div class="col col-50"><p>'+passengerdata[i].child[j].type+'</p><p>'+passengerdata[i].child[j].card+'</p><p>'+passengerdata[i].child[j].tel+'</p> </div><div class="col col-10"> <input type="checkbox" /> </div></div>'+'</span>';
              }
            };
            list+='</div>';
            list+='<div class="row"> <div class="col"> <button class="button button-block button-dark confirm">确认选择</button></div> </div>'
            $('.citylist').html(list);
            //x=null;
            $("button.confirm").live('tap',function(){
             // event.stopPropagation;
              $(this).animate({backgroundColor:'#eee'}, 100);
              $('.city,.citylist').animate({left:500},600,'ease-in');
               $('.catalog').animate({right:-495,opacity:0},600,'ease-in');
              setTimeout(function(){
                  $('.city').remove();
                },850);
              // console.log(x);
             // return x;

            });
            var cata='<div>';
            for(var i=0; i<passengerdata.length; i++){
                cata+='<a href="#'+passengerdata[i].id+'">'+passengerdata[i].name+'</a>'
            }
            cata+='</div>';
            $('.catalog').html(cata);
        }
      })


}

function passengerAdd(){    
    alert('hello')

}






