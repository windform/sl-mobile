// JavaScript Document
$(function () {
    //初始化ajax请求
    loadUrl('./templets/index.html');

    //单击底部选项卡发送对应的ajax请求
    $("#bottom-tabs a").tap(function () {
        $("#bottom-tabs a").removeClass('tab-active');
        $(this).addClass('tab-active');
        $('.loading').css('opacity', 1);
        loadUrl($(this).attr('data-href'));
        return false;
    });


    $("#airline_type a").live('tap', function () {
        $("#airline_type a").removeClass('active');
        $(this).addClass('active');
        $(".type_tabs").css('display', 'none');
        $(".type_tabs").eq($(this).index()).css('display', 'block');
    });

    $("#search").live('tap', function () {
        loadSecondUrl('search_list.html');
    })




});