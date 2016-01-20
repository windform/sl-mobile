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
	
    //日期选择器插件
	$("#dtBox").DateTimePicker({ dateFormat: "yyyy-MM-dd" });

	$("#search").live('tap',function(){
		window.location.href='search_list.html';
	});



});