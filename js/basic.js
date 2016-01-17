// JavaScript Document
$(function(){
	//初始化ajax请求
	loadUrl('./templets/index.html');
	
	//单击底部选项卡发送对应的ajax请求
	$("#bottom-tabs a").tap(function(){
		$("#bottom-tabs a").removeClass('tab-active');
		$(this).addClass('tab-active');
		$('.loading').css('opacity',1);
		loadUrl($(this).attr('src'));
		return false;
		});	
});