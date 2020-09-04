$(window).on('load', function() {
	$('body').removeClass('preloading');
	
	$('.loading').delay(1000).fadeOut('fast');
});