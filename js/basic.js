// JavaScript Document
$(function () {
    //初始化ajax请求
   

    //单击底部选项卡发送对应的ajax请求
    $("#bottom-tabs a").tap(function () {
        $("#bottom-tabs a").removeClass('tab-active');
        $(this).addClass('tab-active');
        //$('.loading').css('opacity', 1);
		header('.frame_header',$(this).text());
        loadUrl($(this).attr('data-href'));
        return false;
    });


    //book.html
    //1、机票搜索选项卡切换js
    $("#airline_type a").live('tap', function () {
        $("#airline_type a").removeClass('active');
        $(this).addClass('active');
        $(".type_tabs").css('display', 'none');
        $(".type_tabs").eq($(this).index()).css('display', 'block');
        $('.search').attr('id','search'+$(this).index());
    });

    //2、获取城市名
    $("#start_city").focus(function(event) {
            event.stopPropagation();
            output();
      });
    $("#end_city").focus(function(event) {
            event.stopPropagation();
            output();
      });
    //交换城市
    $('.exchange').click(function(){
        var start_city=$(this).parent().find('.start_city').val();
        var end_city=$(this).parent().find('.end_city').val();
       // var halfway_city=$(this).parent().find('.halfway_city').val()
        //alert(start_city+','+end_city);
        $(this).parent().find('.start_city').val(end_city);
        $(this).parent().find('.end_city').val(start_city);
       // $(this).parent().find('.halfway_city').val(end_city);


    })

	

    $("#search0").live('tap',function(){
        window.location.href='search_list.html';
    });
    $("#search1").live('tap',function(){
        window.location.href='search_list1.html';
    });
    $("#search2").live('tap',function(){
        window.location.href='search_list2.html';
    });

    //3、城市交换
	exchange();

    //search_list.html
    //1、筛选条件
    $('.preparation_filter').on('tap',function(){
        conditionSelect(aircompany_dress_data);
    })
    //2、航空公司筛选条件
   var aircompany_dress_data=['不限','南方航空','东方航空','奥凯航空','西部航空','汉莎航空','中国航空','美联航空']
   //3、时间条件筛选
   $('.preparation_time').on('tap',function(){
        var src=$(this).find('img').attr('src');
        switch(src){
            case 'images/search_result_time.png':{
                $(this).find('img').attr('src','images/search_result_time_ascending.png');
                break;
            }
            case 'images/search_result_time_ascending.png':{
                $(this).find('img').attr('src','images/search_result_time_descending.png');
                break;
            };
            case 'images/search_result_time_descending.png':{
                $(this).find('img').attr('src','images/search_result_time.png');
                break;
            };
        }
   })
   //4、价格条件筛选
   $('.preparation_price').on('tap',function(){
         var src=$(this).find('img').attr('src');
         switch(src){
            case 'images/search_result_price.png':{
                $(this).find('img').attr('src','images/search_result_price_ascending.png');
                break;
            }
            case 'images/search_result_price_ascending.png':{
                $(this).find('img').attr('src','images/search_result_price_descending.png');
                break;
            };
            case 'images/search_result_price_descending.png':{
                $(this).find('img').attr('src','images/search_result_price.png');
                break;
            };
        }

   })



    //airline_detail.html

    //advance.html
    //1、链接跳转
    $("#next").live('tap',function(){   
        window.location.href='policy.html';
    });
    //2、单击页".btn-plus"，显示"选择常旅客"和"添加常旅客"
    $('.btn-plus').on('tap',function(event){
            event.stopPropagation();
            passengerSelectAdd();
    });
    //3、单击页面除".btn-plus"的任意位置，移除".passenger_staff"
    $(document).not('.btn-plus').on('tap',function(){
        $('.passenger_staff').animate({bottom:-200}, 300,'ease-in');
        setTimeout(function(){
            $('.passenger_staff').remove();

        },310)
    })
    //4、单击"选择常旅客"，进入"选择常旅客"界面
    $(".passenger-select").live('tap',function(){
        event.stopPropagation();
        //$('.city').remove();
        //normalPassenger();
        //alert('hello');
        $('.city').css('display','block');
        setTimeout(function(){
            $('.passenger_staff').remove();
        },800)
    })
    //5、单击"添加常旅客"，进入"添加常旅客"界面
    $(".passenger-add").live('tap',function(){
        event.stopPropagation();
        $('.passenger_mask').remove();
        passengerAdd();

        setTimeout(function(){
            $('.passenger_staff').remove();
        },800)
    })
    //5、删除乘客信息
    $('.btn-remove').live('tap',function(){
        $(this).parent().parent().remove();
    })

    //6、是否购买航空意外险JS选择
    $('.airline_ensure').on('click',function(){
        var status=$(this).find('input[type="checkbox"]').attr('checked');
        if(status===true){
            $('.airline_ensure_list').css('display','block');
        }else{
            $('.airline_ensure_list').css('display','none');   
        }
        //$('.airline_ensure_list').fadeToggle(300);
    })    
   

    //policy.html
    //1、政策选择数据渲染
    var policy_box='<div>';
    for(var i=0;i<policydata.length;i++){
        policy_box+='<div class="policy_list bor_bot2"><div class="row"><div class="col col-20"><p>返点</p><p>'+policydata[i].ticket_point+'</p></div><div class="col col-40"><p>出票时间</p><p>'+policydata[i].ticketout_time+'</p></div><div class="col col-40"><p>机票推荐</p><p class="policy_type">'+policydata[i].ticketout_recommend+'</p></div><div class="col policy_num_shell"><p class="policy_num">'+policydata[i].policy_num+'</p></div></div><div class="row"><div class="col policy_remarks"><p></p><p>'+policydata[i].policy_remarks+'</p></div></div></div>'
    }
    policy_box+='</div>'
    $('.policy_select_wrap').html(policy_box);

    //2、选择政策显示当前政策备注
    $('.policy_num').eq(0).addClass('policy_num_active');
    $('.policy_remarks').css('display','none').eq(0).css('display','block')
    $('.policy_num').live('tap',function(){
         $('.policy_num').removeClass('policy_num_active');
         $(this).addClass('policy_num_active');
         $('.policy_remarks').css('display','none');
         $(this).parent().parent().next().find('.policy_remarks').css('display','block')
    })

    //3、显示隐藏部分数据
    $('.policy_show').on('tap',function(event){
        event.preventDefault();
        $(this).css('display','none');
        $('.policy_hide').css('display','block');
        $('.policy_default').animate({height:180}, 300)
        $('.row_hid').animate({opacity:1}, 300)
    })
    $('.policy_hide').on('tap',function(event){
        event.preventDefault();
        $(this).css('display','none');
        $('.policy_show').css('display','block');
        $('.policy_default').animate({height:87}, 300)
        $('.row_hid').animate({opacity:0}, 300);
    })

    //4、生成订单链接跳转
    $('.order_button').live('tap',function(){
        window.location.href='order_detail.html';
    })



    //order_detail.html
    //1、单击按钮显示隐藏动画
    $('.order_down').live('tap',function(){
        var that=$(this);
        $(this).css('display','none');
        $(this).next().css('display','block');
        $(this).parent().animate({height:110},300);
        setTimeout(function(){
             that.parent().find('.row_detail').css('display','flex');
        },300)
    });
    $('.order_up').live('tap',function(){
        var that=$(this);
        $(this).css('display','none');
        $(this).prev().css('display','block');
        $(this).parent().animate({height:25,},300);
        that.parent().find('.row_detail').css('display','none')
    });

    //2、单击按钮显示或隐藏退改签规定及政策说明
    $('.order_read_btn').click(function(){
        $('.row_order_rules').fadeToggle(300);
        $(this).toggleClass('ion-arrow-up-b');

    })

    //3、机票信息数据渲染展示
    var order_box='<div>';
    for(var i=0;i<orderData.length;i++){
        order_box+='<div class="order_detail_list">'
                +'<div class="row bor_bot3">'
                +'<div class="col col-25">'
                +'<p>某某</p>'
                +'<p>身份证号</p>'
                +'<p>保险数量</p>'
                +'<p>票号</p>'
                +'</div>'
                +'<div class="col col-75">'
                +'<p>'+orderData[i].person_type+'</p>'
                +'<p>'+orderData[i].person_num+'</p>'
                +'<p>'+orderData[i].ensure_num+'</p>'
                +'<p>'+orderData[i].ticket_num+'</p>'
                +'</div>'
                +'</div>'
            +'<div class="row row_detail">'
                +'<div class="col"><span>舱位:</span></div>'
                +'<div class="col"><span>'+orderData[i].cabin+'</span></div>'
                +'<div class="col"><span>票面结算价:</span></div>'
                +'<div class="col"><span class="red_color">'+orderData[i].ticket_price+'</span></div>'
            +'</div>'
            +'<div class="row row_detail">'
                +'<div class="col"><span>机建/燃油:</span></div>'
                +'<div class="col"><span>'+orderData[i].airline_taste+'</span></div>'
                +'<div class="col"><span>单张票价:</span></div>'
                +'<div class="col"><span class="red_color">'+orderData[i].single_price+'</span></div>'
            +'</div>'
            +'<div class="order_toggle">'
                +'<div class="row row_detail">'
                    +'<div class="col"><span>返点:</span></div>'
                    +'<div class="col"><span>'+orderData[i].ticket_point+'</span></div>'
                    +'<div class="col"><span>单张代理费:</span></div>'
                    +'<div class="col"><span class="red_color">'+orderData[i].agent_price+'</span></div>'
                +'</div>'
                +'<div class="row row_detail">'
                    +'<div class="col"><span>机票推荐:</span></div>'
                    +'<div class="col"><span class="policy_type">'+orderData[i].ticketout_recommend+'</span></div>'
                    +'<div class="col"><span>政策类型:</span></div>'
                    +'<div class="col"><span style="width:80px">'+orderData[i].policy_type+'</span></div>'
        
                +'</div>'
                +'<div class="row row_detail">'
                    +'<div class="col"><span>出票时间:</span></div>'
                    +'<div class="col"><span style="width:100px">'+orderData[i].ticketout_time+'</span></div> '
                    +'<div class="col"></div>'
                    +'<div class="col"></div>'
                +'</div>'
                +'<a class="button ion-chevron-down order_toggle_btn order_down"></a>'
                +'<a class="button ion-chevron-up order_toggle_btn order_up"></a>'
            +'</div>'
        +'</div> '
    }

    order_box+='</div>';
    $('.order_detail_wrap').html(order_box);

    //申请退改签出现提示
    $('.btn-ticketout').tap(function(){
        var popStr=['申请退改签','如需办理退改签，请拨打客服专线022-84858687','拨打客服专线']
        var url='#'
        pop2(popStr,url);
         
    })

    //order_detail0.html
    //1、取消订单
    $('.neworder_cancel').on('tap',function(){
        pop3(['取消订单','确认取消订单？','返回','确认'])
    })


    //plane_orderlist.html
    //1、模拟数据填充
    orderList()

    //ensure_orderlist.html
    //1、模拟数据填充
    ensureorderList()
    //2、订单筛选
    $('.ensure_dress').on('tap',function(){
         ensureDress();
    })

    //plane_orderlist.html 
    //1、订单筛选
    $('.plane_dress').on('tap',function(){
         planeDress();
    })


    //pay.html
    //1、连币支付判断
    $('.lianbi').on('tap',function(){
            var payPrice=parseFloat(($('.pay_price').text().substr(1))).toFixed(2);
            var moneyCount=parseFloat(($('.money_count').text().substr(1))).toFixed(2);
            if(payPrice<moneyCount || payPrice==moneyCount ){
                var popStr=['取消','请输入连币支付密码','确认支付']
                var url='plane_orderlist.html'
                pop1(popStr,url);
            }else{
                 var popStr=['余额不足','连币余额不足，请充值后再进行支付','连币充值']
                 var url='charge.html'
                 pop2(popStr,url);
            };
        })

    //2、网上银行支付
    $('.web_bank').on('tap',function(){
        webBank('网上银行',bank_logo_data);
    })

    //2、信用卡大额支付
    $('.card_bank').on('tap',function(){
        webBank('信用卡大额',bank_logo_data1);
    })


    //my.html
    //1、用户登陆或注册
    $('.log-in').on('tap',function(){
        window.location.href='login.html';
    })

    //login.html
    //1、登陆
    $('.login-button').on('tap',function(){
         window.location.href='person_center.html';
    });
    //2、注册新账号
    $('.register-button').on('tap',function(){
        window.location.href='register.html';
    })


    //pass_forgot.html
    $('.forgot-next').on('tap',function(){
        window.location.href='pass_reset.html';
    })

    //pass_reset.html
    $('.pass-reset').on('tap',function(){
        window.location.href='login.html';
    })

    //register.html
    $('.register-next').on('tap',function(){
        window.location.href='register_info.html';
    })

    //register_info.html
    //1、选择用户性质
    $('.property').on('tap',function(event){
        event.stopPropagation();
        orderstatusSelect('.property-text',property_data);
    })
    //2、重填所有信息
    $('.reset-padding').on('tap',function(){
        $('.reset-list').find('input').val('');
        //$('.reset-list').find('a.property-text').val('个人');
    })
    //3、提交用户信息
    $('.submit-button').on('tap',function(){
        window.location.href='login.html';
    })


    //person_center.html
    //1、退出登录
    $('.log-out').on('tap',function(){
        window.location.href='my.html'
    })
    //2、充值账户
    $('.charge_btn').on('tap',function(){
        window.location.href='charge.html'
    })


    //account_set.html
    //1、性别选择
    $('.sex_label').on('tap',function(event){
        event.stopPropagation();
        orderstatusSelect('.sex_text',sex_data);
    })
    //2、证件类型选择
    $('.card_type_label').on('tap',function(event){
        event.stopPropagation();
        orderstatusSelect('.card_type_text',card_type_data);
    })
    //3、交易密码设置
    $('.pass_change').on('tap',function(){
        tradePass();
    })
    //4、确认修改按钮跳转
    $('.account-confirm').on('tap',function(){
        window.location.href='person_center.html';
    })

    //charge.html
    //1、选择支付方式
    $('.charge_method').on('tap',function(event){
        event.stopPropagation();
        orderstatusSelect('.charge_text',charge_method_data);
    })
    //2、充值按钮跳转
    $('.charge-button').on('tap',function(){
        window.location.href='account_set.html';
    })

    //password_change.html
    $('.pass_revise').on('tap',function(){
        window.location.href='person_center.html';
    })

    //more_set.html
    //1、checkbox组件改装代码
    $('.on_off').eq(0).css('backgroundColor','#00a1ea').find('input[type="checkbox"]').attr('checked','checked').next('.square').css('left',37)
        $('.on_off').find('input[type="checkbox"]').on('tap',function(){
            if($(this).is(":checked")){
                $(this).next('.square').animate({left:37},100,'ease-in-out');
                $(this).parent().animate({backgroundColor:'#00a1ea'},100,'ease-in-out');
                var arr=['协议','一个账号只能签约一个汇付交易账号，签约成功后不可更改、删除，是否确定签约？','确定','取消'];
                var url='';
                pop3(arr,url);
            }else{
                $(this).next('.square').animate({left:1},100,'ease-in-out');
                $(this).parent().animate({backgroundColor:'#dd2223'},100,'ease-in-out');
            }
        })
        $('.account_remove').on('tap',function(){
            $(this).parent().parent().remove();
        })
    //2、设置账号
    $('.set_account').on('tap',function(){
         setAccount();
    })


    //passenger.html
    //1、添加常旅客
    $('.pass-add').on('tap',function(){
        passengerAdd();
    })
    //2、修改常旅客信息
    $('.passenger_edit').on('tap',function(){
        passengerRevise();
    })
    





});


var sex_data=['男','女'];
var card_type_data=['身份证','出生证','港澳同胞证','回乡证','警官证'];

//支付方式数据
var charge_method_data=['财付通','支付宝','易生','汇付天下'];
//用户性质数据
var property_data=['个人','同行'];
//网上银行图片数据
var bank_logo_data=[{
        "logo": "bank_gongshang.png", 
        "link": "#"
    }, {
        "logo": "bank_jianshe.png", 
        "link": "#"
    }, {
        "logo": "bank_zhaoshang.png", 
        "link": "#"
    }, {
        "logo": "bank_zhongguo.png", 
        "link": "#"
    }, {
        "logo": "bank_nongye.png", 
        "link": "#"
    }, {
        "logo": "bank_jiaotong.png", 
        "link": "#"
    }, {
        "logo": "bank_pufa.png", 
        "link": "#"
    }, {
        "logo": "bank_guangfa.png", 
        "link": "#"
    }, {
        "logo": "bank_zhongxin.png", 
        "link": "#"
    }, {
        "logo": "bank_xingye.png", 
        "link": "#"
    }, {
        "logo": "bank_shenfa.png", 
        "link": "#"
    }, {
        "logo": "bank_minsheng.png", 
        "link": "#"
    }, {
        "logo": "bank_ningbo.png", 
        "link": "#"
    }, {
        "logo": "bank_pingan.png", 
        "link": "#"
    }, {
        "logo": "bank_shanghai.png", 
        "link": "#"
    }, {
        "logo": "bank_youzheng.png", 
        "link": "#"
    }, {
        "logo": "bank_beijing.png", 
        "link": "#"
    }, {
        "logo": "bank_nongshang.png", 
        "link": "#"
    }, {
        "logo": "bank_guangda.png", 
        "link": "#"
    }, {
        "logo": "bank_jianshe_company.png", 
        "link": "#"
    }, {
        "logo": "bank_nongye_company.png", 
        "link": "#"
    }, {
        "logo": "bank_zhaoshang_company.png", 
        "link": "#"
    }, {
        "logo": "undefined0.png", 
        "link": "#"
    }, {
        "logo": "undefined1.png", 
        "link": "#"
    }]

//信用卡大额图片数据
var bank_logo_data1=[{
        "logo": "bank_gongshang.png", 
        "link": "#"
    }, {
        "logo": "bank_jianshe.png", 
        "link": "#"
    }, {
        "logo": "bank_zhaoshang.png", 
        "link": "#"
    }, {
        "logo": "bank_zhongguo.png", 
        "link": "#"
    }, {
        "logo": "bank_nongye.png", 
        "link": "#"
    }, {
        "logo": "bank_jiaotong.png", 
        "link": "#"
    }, {
        "logo": "bank_pufa.png", 
        "link": "#"
    }, {
        "logo": "bank_guangfa.png", 
        "link": "#"
    }, {
        "logo": "bank_zhongxin.png", 
        "link": "#"
    }, {
        "logo": "bank_xingye.png", 
        "link": "#"
    }, {
        "logo": "bank_shenfa.png", 
        "link": "#"
    }, {
        "logo": "bank_minsheng.png", 
        "link": "#"
    }, {
        "logo": "bank_ningbo.png", 
        "link": "#"
    }, {
        "logo": "bank_pingan.png", 
        "link": "#"
    }, {
        "logo": "bank_shanghai.png", 
        "link": "#"
    }, {
        "logo": "bank_youzheng.png", 
        "link": "#"
    }, {
        "logo": "bank_beijing.png", 
        "link": "#"
    }, {
        "logo": "bank_nongshang.png", 
        "link": "#"
    }]









//订单详细虚假模拟数据
var orderData=[{
    'name':'张三',
    'person_num':'36078216457828',
    'person_type':'成人',
    'ensure_num':'8',
    'ticket_num':'Yu7894667',
    'cabin':'R',
    'ticket_price':'￥542.52',
    'airline_taste':'￥50/0',
    'single_price':'￥591.52',
    'ticket_point':'3.3%',
    'agent_price':'￥18.48',
    'ticketout_recommend':'标准政策',
    'policy_type':'B2B,PSB',
    'ticketout_time':'00:00-23:59'
},{
    'name':'小李',
    'person_num':'465434687654674',
    'person_type':'成人',
    'ensure_num':'2',
    'ticket_num':'TR78915567',
    'cabin':'经济舱',
    'ticket_price':'￥1022.52',
    'airline_taste':'￥50/0',
    'single_price':'￥1201.52',
    'ticket_point':'5.3%',
    'agent_price':'￥50.48',
    'ticketout_recommend':'紧急政策',
    'policy_type':'B2C',
    'ticketout_time':'07:00-23:59'
},{
    'name':'王小二',
    'person_num':'JHFB87654674',
    'person_type':'儿童',
    'ensure_num':'４',
    'ticket_num':'NG78915567',
    'cabin':'无座',
    'ticket_price':'￥200.62',
    'airline_taste':'￥50/0',
    'single_price':'￥301.52',
    'ticket_point':'1.3%',
    'agent_price':'￥19.48',
    'ticketout_recommend':'标准政策',
    'policy_type':'B2B,B2G',
    'ticketout_time':'07:00-18:59'
}]



//政策选择虚假模拟数据
var policydata=[{
    'policy_num':'政策一',
    'ticket_point':'3.3%',
    'ticketout_time':'00:00-23:59',
    'ticketout_recommend':'标准政策',
    'policy_remarks':'政策备注：换编码出票！此政策只适用于高价，低价不享受，否则拒单，改期、升舱、换开、签转外航以及政策航班改到无政策航班，需收回代理费需要换编码出票，外放无舱位请勿导入，否则拒单，此政策只适用于高价，低价不享受，否则拒单，改期、升舱、换开、签转外航以及政策航班改到无政策航班，需收回代理费'

},{
    'policy_num':'政策二',
    'ticket_point':'3.2%',
    'ticketout_time':'00:00-23:59',
    'ticketout_recommend':'标准政策',
    'policy_remarks':'政策备注：换编码出票！此政策只适用于高价，低价不享受，否则拒单，改期、升舱、换开、签转外航以及政策航班改到无政策航班，需收回代理费需要换编码出票，外放无舱位请勿导入，否则拒单，此政策只适用于高价，低价不享受，否则拒单，改期、升舱、换开、签转外航以及政策航班改到无政策航班，需收回代理费'

},{
    'policy_num':'政策三',
    'ticket_point':'3.1%',
    'ticketout_time':'07:00-23:59',
    'ticketout_recommend':'标准政策',
    'policy_remarks':'政策备注：换编码出票！此政策只适用于高价，低价不享受，否则拒单，改期、升舱、换开、签转外航以及政策航班改到无政策航班，需收回代理费需要换编码出票，外放无舱位请勿导入，否则拒单，此政策只适用于高价，低价不享受，否则拒单，改期、升舱、换开、签转外航以及政策航班改到无政策航班，需收回代理费'

},{
    'policy_num':'政策四',
    'ticket_point':'0.1%',
    'ticketout_time':'00:00-23:59',
    'ticketout_recommend':'紧急出票',
    'policy_remarks':'政策备注：换编码出票！此政策只适用于高价，低价不享受，否则拒单，改期、升舱、换开、签转外航以及政策航班改到无政策航班，需收回代理费需要换编码出票，外放无舱位请勿导入，否则拒单，此政策只适用于高价，低价不享受，否则拒单，改期、升舱、换开、签转外航以及政策航班改到无政策航班，需收回代理费'

},]



