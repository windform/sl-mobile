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

function orderList(){
    var orderlist_box='<div class="list">';
    for(var i=0; i<orderlistdata.length; i++){
        orderlist_box+='<div class="list card">'
                    +'<div class="item item-avatar">'
                        +'<span>订单时间：'+orderlistdata[i].order_time+'</span>'
                        +'<span class="blue_font">'+orderlistdata[i].order_type+'</span>'
                    +'</div>'
                    for(var j=0;j<orderlistdata[i].order_detail.length;j++){
                    orderlist_box+='<a class="item" href="order_detail'+i+'.html">'
                        +'<div class="search_shell">'
                            +'<div class="search_item">'
                                +'<span class="start_end">'+orderlistdata[i].order_detail[j].start_end+'</span>'
                                +'<span class="food">'+orderlistdata[i].order_detail[j].food+'</span>'
                                +'<span class="stop">'+orderlistdata[i].order_detail[j].stop+'</span>'
                                +'<span class="air_type">'+orderlistdata[i].order_detail[j].air_type+'</span>'
                                +'<span class="company">'+orderlistdata[i].order_detail[j].company+'</span>'
                                +'<span class="logo">'
                                    +'<img src="'+orderlistdata[i].order_detail[j].logo+'" alt="航空公司logo">'
                                +'</span>'
                            +'</div>'
                            +'<div class="search_item">'
                                +'<span class="start_date">'+orderlistdata[i].order_detail[j].start_date+'</span>'
                                +'<span class="section_time">'+orderlistdata[i].order_detail[j].section_time+'</span>'
                            +'</div>'
                        +'</div>'
                    +'</a>'
                    }
                    orderlist_box+='<div class="item  item-avatar">'
                        +'<span><img src="images/person.jpg" alt="人物icon">'+orderlistdata[i].order_person+'</span>'
                        +'<span>票面价:<span class="red_font">'+orderlistdata[i].ticket_price+'</span></span>'
                    +'</div>'
                +'</div>'
    }
    orderlist_box+='</div>';
    $('.order_search_list').html(orderlist_box);
}

function ensureorderList(){
    var orderlist_box='<div class="list">';
    for(var i=0; i<ensureorderlistdata.length; i++){
        orderlist_box+='<div class="list card">'
                    +'<div class="item item-avatar">'
                        +'<span>订单时间：'+ensureorderlistdata[i].order_time+'</span>'
                        +'<span class="blue_font">'+ensureorderlistdata[i].order_type+'</span>'
                    +'</div>'
                    +'<a class="item" href="ensure_orderdetail'+i+'.html">'
                        +'<div class="search_shell">'
                            +'<div class="search_item">'
                                +'<span class="start_end">'+ensureorderlistdata[i].ensure_name+'</span>'
                                +'<span class="start_end ensure_time">'+ensureorderlistdata[i].ensure_time+'</span>'
                                +'<span class="food">最高保额：'+ensureorderlistdata[i].ensure_amount+'</span>'
                            +'</div>'
                        +'</div>'
                    +'</a>'
                    +'<div class="item  item-avatar">'
                        +'<span><img src="images/person.jpg" alt="人物icon">'+ensureorderlistdata[i].order_person+'</span>'
                        +'<span>票面价:<span class="red_font">'+ensureorderlistdata[i].ticket_price+'</span></span>'
                    +'</div>'
                +'</div>'
    }
    orderlist_box+='</div>';
    $('.ensure_search_list').html(orderlist_box);
}

function ensureDress(){
    $('.passenger_mask').remove();
    var passenger_mask='<div class="passenger_mask">'
    +'<div class="bar bar-header bar-dark">'
      +'<a class="button icon-left ion-ios-arrow-back button-clear button-light passenger-back"></a>'
      +'<h1 class="title">订单筛选</h1>'
    +'</div> '
    +'<div class="list list-inset passenger-list">'
      +'<label class="item item-input">'
        +'<span class="input-label">订单编号</span>'
        +'<input type="text">'
      +'</label>'
      +'<label class="item item-input" style="padding-right:6px;">'
        +'<span class="input-label">操作日期</span>'
        +'<input type="text" data-field="date" data-format="yyyy-MM-dd" readonly style="padding-right:0px">-<input type="text" data-field="date" data-format="yyyy-MM-dd" readonly style="padding-right:0px">'
      +'</label>'
      +'<label class="item item-input order-status">'
        +'<span class="input-label">订单状态</span>'
        +'<a class="item-icon-right order-type-text" href="#">所有订单<i class="icon ion-ios-arrow-right"></i></a>'
      +'</label>'
    +'</div>'
    +'<div class="padding">'
        +'<button class="button button-block button-dark passenger-save">查询</button>'
    +'</div></div>'

    $('body').append(passenger_mask);
     $('.passenger_mask').animate({
           left:0
      },500);
    $('.passenger-back,.passenger-save').on('tap',function(){
        $('.passenger_mask').animate({left:800}, 500);
        setTimeout(function(){$('.passenger_mask').remove()},500)
    });
    $('.order-status').on('tap',function(event){
      event.stopPropagation();
      orderstatusSelect('.order-type-text',ensure_dress_data);
    });
}

function planeDress(){
    $('.passenger_mask').remove();
    var passenger_mask='<div class="passenger_mask">'
    +'<div class="bar bar-header bar-dark">'
      +'<a class="button icon-left ion-ios-arrow-back button-clear button-light passenger-back"></a>'
      +'<h1 class="title">订单筛选</h1>'
    +'</div> '
    +'<div class="list list-inset passenger-list">'
      +'<label class="item item-input">'
        +'<span class="input-label">PNR编号</span>'
        +'<input type="text">'
      +'</label>'
      +'<label class="item item-input">'
        +'<span class="input-label">订单编号</span>'
        +'<input type="text">'
      +'</label>'
      +'<label class="item item-input" style="padding-right:6px;">'
        +'<span class="input-label">订单日期</span>'
        +'<input type="text" data-field="date" data-format="yyyy-MM-dd" readonly style="padding-right:0px">-<input type="text" data-field="date" data-format="yyyy-MM-dd" readonly style="padding-right:0px">'
      +'</label>'
      +'<label class="item item-input">'
        +'<span class="input-label">订单票号</span>'
        +'<input type="text">'
      +'</label>'
      +'<label class="item item-input">'
        +'<span class="input-label">乘机人</span>'
        +'<input type="text">'
      +'</label>'
      +'<label class="item item-input">'
        +'<span class="input-label">订票人</span>'
        +'<input type="text">'
      +'</label>'
      +'<label class="item item-input order-status1">'
        +'<span class="input-label">订单状态</span>'
        +'<a class="item-icon-right order-type-text" href="#">所有订单<i class="icon ion-ios-arrow-right"></i></a>'
      +'</label>'
      +'<label class="item item-input order-status2">'
        +'<span class="input-label">航空公司</span>'
        +'<a class="item-icon-right company-name-text" href="#">所有航空公司<i class="icon ion-ios-arrow-right"></i></a>'
      +'</label>'
    +'</div>'
    +'<div class="padding">'
        +'<button class="button button-block button-dark passenger-save">查询</button>'
    +'</div></div>'

    $('body').append(passenger_mask);
     $('.passenger_mask').animate({
           left:0
      },500);
    $('.passenger-back,.passenger-save').on('tap',function(){
        $('.passenger_mask').animate({left:800}, 500);
        setTimeout(function(){$('.passenger_mask').remove()},500)
    });
    $('.order-status1').on('tap',function(event){
      event.stopPropagation();
      orderstatusSelect('.order-type-text',ensure_dress_data);
    });
    $('.order-status2').on('tap',function(event){
      event.stopPropagation();
      orderstatusSelect('.company-name-text',company_dress_data);
    });
}

function orderstatusSelect(valele,arr){
  $('.ensure_mask').remove();
  var ensure_mask='<div class="ensure_mask">'
                  +'<div class="holder">'
                    for(var i=0; i<arr.length; i++){
                      ensure_mask+='<label for="ensure_order_'+i+'">'+arr[i]
                      +'<span class="auto_radio">'
                        +'<input type="radio" name="ensure_order_status" id="ensure_order_'+i+'">'
                      +'</span>'
                    +'</label>'
                    }


                  +'</div>'
                +'</div>'
  $('body').append(ensure_mask);
  $('.ensure_mask').animate({opacity:1},300);
  $('.holder').animate({bottom:0}, 300);

 /* var val=$('.order-type-text').text();
  console.log(val);*/
  //$('.holder label').contents().not(':contains('+val+')').filter('input[type="radio"]').attr('checked',true);
  //$('.holder label').contents().not(':contains('+val+')').filter('.auto_radio').addClass('icon');

  $('.holder label').eq(0).find('input[type="radio"]').attr('checked',true);
  $('.holder label').eq(0).find('.auto_radio').addClass('icon');

      $('.holder label').on('tap',function(event){
        event.stopPropagation();
        $('.holder label').find('.auto_radio').removeClass('icon');
        $('.holder label').find('input[type="radio"]').attr('checked',false);
        $(this).find('.auto_radio').addClass('icon');
        $(this).find('input[type="radio"]').attr('checked',true);
        $(valele).html($(this).text()+'<i class="icon ion-ios-arrow-right"></i>');
      })
  $('.ensure_mask').on('tap',function(event){
      event.stopPropagation();
      $('.ensure_mask').animate({opacity:0},300);
      $('.holder').animate({bottom:-500}, 300);
      setTimeout(function(){$('.ensure_mask').remove()},310);
  })
}

//保险订单筛选虚假模拟数据
var ensure_dress_data=['所有订单','已出票','已支付','已改签','已退票','已拒票']
var company_dress_data=['所有航空公司','南方航','中国航空','奥凯航空','春秋航空','东方航空']

//保险订单列表虚假模拟数据
var ensureorderlistdata=[{
    "order_time":"2016-01-10 13:32",
    "order_type":"新订单",
    "ensure_name":"阳光人寿航空意外险",
    "ensure_time":"7天",
    "ensure_amount":"80万",
    "order_person":"沈佳宜等两人",
    "ticket_price":"￥4520"
},{
    "order_time":"2016-01-19 15:32",
    "order_type":"投保成功",
    "ensure_name":"阳光人寿航空意外险",
    "ensure_time":"7天",
    "ensure_amount":"80万",
    "order_person":"沈梦辰",
    "ticket_price":"￥4520"
},{
    "order_time":"2016-01-25 18:32",
    "order_type":"已取消",
    "ensure_name":"阳光人寿航空意外险",
    "ensure_time":"7天",
    "ensure_amount":"80万",
    "order_person":"沈浪",
    "ticket_price":"￥4520"
}]


//机票订单列表虚假模拟数据
var orderlistdata=[{
    "order_time":"2016-01-10 13:32",
    "order_type":"新订单",
    "order_detail":[{
        "start_end":"北京→上海",
        "food":"有餐食",
        "stop":"不经停",
        "air_type":"321",
        "company":"吉祥HO1252",
        "logo":"images/company_logo.jpg",
        "start_date":"2016-01-12 周二",
        "section_time":"06:35-08:45"
    },{
        "start_end":"上海→北京",
        "food":"有餐食",
        "stop":"不经停",
        "air_type":"321",
        "company":"吉祥HO1252",
        "logo":"images/company_logo.jpg",
        "start_date":"2016-01-18 周一",
        "section_time":"06:35-08:45"
    }],
    "order_person":"沈佳宜等两人",
    "ticket_price":"￥4520"
},{
    "order_time":"2016-01-19 13:32",
    "order_type":"已支付",
    "order_detail":[{
        "start_end":"上海→广州",
        "food":"有餐食",
        "stop":"不经停",
        "air_type":"321",
        "company":"东航HO1252",
        "logo":"images/company_logo.jpg",
        "start_date":"2016-01-20 周二",
        "section_time":"06:35-08:45"
    },{
        "start_end":"广州→上海",
        "food":"有餐食",
        "stop":"不经停",
        "air_type":"321",
        "company":"东航HO1252",
        "logo":"images/company_logo.jpg",
        "start_date":"2016-01-25 周一",
        "section_time":"06:35-08:45"
    }],
    "order_person":"盖聂等两人",
    "ticket_price":"￥4520"
},{
    "order_time":"2016-01-15 14:32",
    "order_type":"已出票",
    "order_detail":[{
        "start_end":"北京→武汉",
        "food":"无餐食",
        "stop":"经停",
        "air_type":"311",
        "company":"南航HO1252",
        "logo":"images/company_logo.jpg",
        "start_date":"2016-01-16 周三",
        "section_time":"09:35-21:45"
    }],
    "order_person":"汤唯",
    "ticket_price":"￥1320"
},{
    "order_time":"2016-01-20 20:32",
    "order_type":"已退改签取消",
    "order_detail":[{
        "start_end":"北京→广州",
        "food":"有餐食",
        "stop":"不经停",
        "air_type":"320",
        "company":"国航HO1252",
        "logo":"images/company_logo.jpg",
        "start_date":"2016-02-03 周五",
        "section_time":"06:35-10:45"
    }],
    "order_person":"古天乐",
    "ticket_price":"￥2220"
},{
    "order_time":"2016-01-10 13:32",
    "order_type":"已拒票",
    "order_detail":[{
        "start_end":"北京→成都",
        "food":"有餐食",
        "stop":"不经停",
        "air_type":"321",
        "company":"吉祥HO1252",
        "logo":"images/company_logo.jpg",
        "start_date":"2016-01-12 周二",
        "section_time":"06:35-08:45"
    },{
        "start_end":"成都→乌鲁木齐",
        "food":"有餐食",
        "stop":"不经停",
        "air_type":"321",
        "company":"吉祥HO1252",
        "logo":"images/company_logo.jpg",
        "start_date":"2016-01-18 周一",
        "section_time":"06:35-08:45"
    }],
    "order_person":"柯震东等两人",
    "ticket_price":"￥5020"
}]



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








