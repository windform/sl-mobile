// JavaScript Document
$(function () {
    //初始化ajax请求
    loadUrl('templets/index.html');
	header('.frame_header','首页');

    //单击底部选项卡发送对应的ajax请求
    $("#bottom-tabs a").tap(function () {
        $("#bottom-tabs a").removeClass('tab-active');
        $(this).addClass('tab-active');
        //$('.loading').css('opacity', 1);
		header('.frame_header',$(this).text());
        loadUrl($(this).attr('data-href'));
        return false;
    });

    //机票搜索选项卡切换js
    $("#airline_type a").live('tap', function () {
        $("#airline_type a").removeClass('active');
        $(this).addClass('active');
        $(".type_tabs").css('display', 'none');
        $(".type_tabs").eq($(this).index()).css('display', 'block');
    });
	
	exchange();
	


	$("#search").live('tap',function(){
		window.location.href='search_list.html';
	});

    //advance.html
    $("#next").live('tap',function(){   
        window.location.href='policy.html';
    });

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

});


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