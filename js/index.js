$(function() {
	//头部
	$('.nav_down').hover(function() {
		$(this).find('.down').slideDown();
	},function() {
		$(this).find('.down').slideUp();
	})
	$('.down a').hover(function(){
		$(this).css('background-color','#3398DA')
	},function(){
		$(this).css('background-color','')
	})
	
	
})
