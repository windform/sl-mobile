function loadUrl(url){
  $.ajax({
	  url:url,
	  type:'get',
	  success: function(data){
		  $('.loading').css('opacity',0);
		  $('.sl_content').html(data)
		  }
	  })	
}