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

function searchList(dataName,url){
      var search_list='<div class="list">';
    for(var i=0; i<dataName.length; i++){
        search_list+='<a href="'+url+'" class="item search_link1"><div class="search_shell">'
            +'<div class="search_item">'
            +'<span class="start_time">'+dataName[i].start_time+'</span><span class="start_city">'+dataName[i].start_city+'</span><span class="price">'+dataName[i].price+'</span>'
            +'</div>'
            +'<div class="search_item">'
            +'<span class="reach_time">'+dataName[i].reach_time+'</span><span class="reach_city">'+dataName[i].reach_city+'</span><span class="ticket_point">返点：'+dataName[i].ticket_point+'</span><span class="ticket_price">票面价:'+dataName[i].ticket_price+'</span>'
            +'</div>'
            +'<div class="search_item">'
            +'<span class="logo">logo</span><span class="company">'+dataName[i].company+'</span><span class="air_type">'+dataName[i].air_type+'</span><span class="stop">'+dataName[i].stop+'</span><span class="food">'+dataName[i].food+'</span><span class="seat">座位数:'+dataName[i].seat+'</span><span class="cabin">'+dataName[i].cabin+'</span>'
            +'</div>'
            +'</div></a>'
    }
    search_list+='</div>';
    $(".search_list").html(search_list);
}


function airlineDetail(url){
    var list='<div class="list">';
    for(var i=0; i<data.length; i++){
        list+='<div class="item"><div class="row">'
            +'<div class="col col-80">'
            +'<div class="detail_shell"><span class="cabin">'+data[i].cabin+'</span><span class="price">'+data[i].price+'</span></div>'
            +'<div class="detail_shell"><span class="seat">座位数:'+data[i].seat+'</span><span class="ticket_point">返点:'+data[i].ticket_point+'</span><span class="ticket_price">票面价:'+data[i].ticket_price+'</span></div>'
            +'</div>'
            +'<div class="col col-20"><button class="button button-assertive fr advance">预定</button></div>'
            +'</div></div>'
    }
    list+='</div>';
    $(".search_list_detail").html(list);
    $('.advance').live('tap',function(){
         window.location.href=url;
    })
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
            });
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
  var passenger_mask='<div class="passenger_mask">'
    +'<div class="bar bar-header bar-dark">'
      +'<a class="button icon-left ion-ios-arrow-back button-clear button-light passenger-back"></a>'
      +'<h1 class="title">添加新乘客</h1>'
    +'</div> '
    +'<div class="list list-inset passenger-list">'
      +'<label class="item item-input">'
        +'<span class="input-label">姓名</span>'
        +'<input type="text">'
      +'</label>'
      +'<label class="item item-input passenger-type">'
        +'<span class="input-label">乘客类型</span>'
       +'<a class="item-icon-right passenger-type-text" href="#">成人(>18岁)<i class="icon ion-ios-arrow-right"></i></a>'
      +'</label>'
      +'<label class="item item-input cred-type">'
        +'<span class="input-label">证件类型</span>'
       +'<a class="item-icon-right cred-type-text" href="#">身份证<i class="icon ion-ios-arrow-right"></i></a>'
      +'</label>'
  
      +'<label class="item item-input">'
        +'<span class="input-label">证件号码</span>'
        +'<input type="text">'
      +'</label>'
      +'<label class="item item-input">'
        +'<span class="input-label">手机号码</span>'
        +'<input type="text">'
      +'</label>'
    +'</div>'
    +'<div class="padding">'
        +'<button class="button button-block button-dark passenger-save">保存</button>'
        +'<p class="text-left">保存后自动添加为常旅客</p>'
    +'</div></div>'

    $('body').append(passenger_mask);
     $('.passenger_mask').animate({
           left:0
      },500);
    $('.passenger-back,.passenger-save').on('tap',function(){
        $('.passenger_mask').animate({left:800}, 500);
        setTimeout(function(){$('.passenger_mask').remove()},500)
    });
    $('.cred-type').on('tap',function(event){
      event.stopPropagation();
      infoSelect('cred-type-text','选择证件类型',['身份证','护照','军官证','回乡证','户口本','警官证','其他']);
    });
    $('.passenger-type').on('tap',function(event){
      event.stopPropagation();
      infoSelect('passenger-type-text','选择乘客类型',['成人(>12岁)','儿童(2至12岁)'])
    })

}

function infoSelect(cla,tit,arr){
  $('.info_select').remove();
  var infoSelect='<div class="info_select">'
      +'<div class="row">'
        +'<div class="col col-offset-10 col-80">'
          +'<div class="padding">'
            +'<strong>'+tit+'</strong>'
            +'<a class="button button-small fr button-icon icon ion-close btn-close"></a>'
          +'</div>'
          +'<div style="clear:both"></div>'
          +'<ul class="credentials">'
              for(var i=0; i<arr.length ;i++){
                infoSelect+='<li><label for="val'+i+'">'+arr[i]+'<input id="val'+i+'" name="cred" type="radio"></label></li>'
              }
          +'</ul>'
        +'</div>'
      +'</div> '
    +'</div>'
    $('.passenger_mask').append(infoSelect);
    //默认第一个radio选中
    $('.credentials li').eq(0).find('input').attr('checked',true);
    for(var j=0; j<arr.length;j++){
      $('.credentials li').eq(j).on('tap',function(){
        var txt=$(this).find('label').text();
        $('.'+cla).html(txt+'<i class="icon ion-ios-arrow-right"></i>');
      })
    }
    $('.btn-close').on('tap',function(){
      $('.info_select').remove();
    })
}







//预定舱位虚假模拟数据
var data=[{
    "price":"￥541.52",
    "ticket_point":"3.3%",
    "ticket_price":"￥560",
    "seat":">9",
    "cabin":"45折R舱"
},{
    "price":"￥571.52",
    "ticket_point":"3.0%",
    "ticket_price":"￥580",
    "seat":">3",
    "cabin":"45折R舱"
},{
    "price":"￥300.52",
    "ticket_point":"1.2%",
    "ticket_price":"￥800",
    "seat":">5",
    "cabin":"45折R舱"
},{
    "price":"￥1800.52",
    "ticket_point":"5.0%",
    "ticket_price":"￥800",
    "seat":">6",
    "cabin":"头等舱"
},{
    "price":"￥900.00",
    "ticket_point":"4.2%",
    "ticket_price":"￥1200",
    "seat":">8",
    "cabin":"78折C舱"
}]


//搜索结果列表页虚假模拟数据
var listdata=[{
    "start_time":"06:40",
    "start_city":"北京T3",
    "price":"￥541.52",
    "reach_time":"09:10",
    "reach_city":"上海虹桥T2",
    "ticket_point":"3.3%",
    "ticket_price":"￥560",
    "logo":"",
    "company":"吉祥HO1252",
    "air_type":"321",
    "stop":"不经停",
    "food":"有餐食",
    "seat":">9",
    "cabin":"45折R舱"
},{
    "start_time":"09:40",
    "start_city":"北京T3",
    "price":"￥571.52",
    "reach_time":"09:10",
    "reach_city":"上海虹桥T2",
    "ticket_point":"3.0%",
    "ticket_price":"￥580",
    "logo":"",
    "company":"吉祥HO1252",
    "air_type":"321",
    "stop":"经停",
    "food":"无餐食",
    "seat":">3",
    "cabin":"45折R舱"
},{
    "start_time":"18:40",
    "start_city":"北京T3",
    "price":"￥300.52",
    "reach_time":"09:10",
    "reach_city":"上海虹桥T2",
    "ticket_point":"1.2%",
    "ticket_price":"￥800",
    "logo":"",
    "company":"吉祥HO1252",
    "air_type":"321",
    "stop":"不经停",
    "food":"无餐食",
    "seat":">5",
    "cabin":"45折R舱"
},{
    "start_time":"02:40",
    "start_city":"北京T2",
    "price":"￥1800.52",
    "reach_time":"18:10",
    "reach_city":"上海虹桥T1",
    "ticket_point":"5.0%",
    "ticket_price":"￥800",
    "logo":"",
    "company":"南航CZ1602",
    "air_type":"320",
    "stop":"经停",
    "food":"有餐食",
    "seat":">6",
    "cabin":"头等舱"
}]


//搜索结果列表页虚假模拟数据（返程数据）
var listdata1=[{
    "start_time":"06:40",
    "start_city":"上海虹桥T2",
    "price":"￥541.52",
    "reach_time":"09:10",
    "reach_city":"北京T3",
    "ticket_point":"3.3%",
    "ticket_price":"￥560",
    "logo":"",
    "company":"国航HO1252",
    "air_type":"321",
    "stop":"不经停",
    "food":"有餐食",
    "seat":">9",
    "cabin":"45折R舱"
},{
    "start_time":"09:40",
    "start_city":"上海虹桥T2",
    "price":"￥571.52",
    "reach_time":"09:10",
    "reach_city":"北京T3",
    "ticket_point":"3.0%",
    "ticket_price":"￥580",
    "logo":"",
    "company":"吉祥HO1252",
    "air_type":"321",
    "stop":"经停",
    "food":"无餐食",
    "seat":">3",
    "cabin":"45折R舱"
},{
    "start_time":"18:40",
    "start_city":"上海虹桥T2",
    "price":"￥300.52",
    "reach_time":"09:10",
    "reach_city":"北京T3",
    "ticket_point":"1.2%",
    "ticket_price":"￥800",
    "logo":"",
    "company":"吉祥HO1252",
    "air_type":"321",
    "stop":"不经停",
    "food":"无餐食",
    "seat":">5",
    "cabin":"45折R舱"
},{
    "start_time":"02:40",
    "start_city":"上海虹桥T1",
    "price":"￥1800.52",
    "reach_time":"18:10",
    "reach_city":"北京南苑T2",
    "ticket_point":"5.0%",
    "ticket_price":"￥800",
    "logo":"",
    "company":"南航CZ1602",
    "air_type":"320",
    "stop":"经停",
    "food":"有餐食",
    "seat":">6",
    "cabin":"头等舱"
}]


//搜索结果列表页虚假模拟数据（联程数据）
var listdata2=[{
    "start_time":"06:40",
    "start_city":"上海虹桥T2",
    "price":"￥541.52",
    "reach_time":"09:10",
    "reach_city":"乌鲁木齐T3",
    "ticket_point":"3.3%",
    "ticket_price":"￥560",
    "logo":"",
    "company":"国航HO1252",
    "air_type":"321",
    "stop":"不经停",
    "food":"有餐食",
    "seat":">9",
    "cabin":"45折R舱"
},{
    "start_time":"09:40",
    "start_city":"上海虹桥T2",
    "price":"￥571.52",
    "reach_time":"09:10",
    "reach_city":"乌鲁木齐T3",
    "ticket_point":"3.0%",
    "ticket_price":"￥580",
    "logo":"",
    "company":"南航HO1252",
    "air_type":"321",
    "stop":"经停",
    "food":"无餐食",
    "seat":">3",
    "cabin":"45折R舱"
},{
    "start_time":"18:40",
    "start_city":"上海虹桥T2",
    "price":"￥300.52",
    "reach_time":"09:10",
    "reach_city":"乌鲁木齐T3",
    "ticket_point":"1.2%",
    "ticket_price":"￥800",
    "logo":"",
    "company":"奥凯HO1252",
    "air_type":"321",
    "stop":"不经停",
    "food":"无餐食",
    "seat":">5",
    "cabin":"45折R舱"
},{
    "start_time":"02:40",
    "start_city":"上海虹桥T1",
    "price":"￥1800.52",
    "reach_time":"18:10",
    "reach_city":"乌鲁木齐T2",
    "ticket_point":"5.0%",
    "ticket_price":"￥800",
    "logo":"",
    "company":"南航CZ1602",
    "air_type":"320",
    "stop":"经停",
    "food":"有餐食",
    "seat":">6",
    "cabin":"头等舱"
}]








