;$(function () {
	// param
	var scrollTop = $(document).scrollTop();
	var navTop = $('.head_content').offset().top;
	var nav = $('.head_content');
	var nav_list = $('.nav');
	var logo = $('.logo');
	// API
	function main () {
		navFixed();
	}
	// get scroll
	$(window).scroll(function () {
		var x = $(document).scrollTop();
		scrollTop = x;
	})
	// nav position fixed
	function navFixed () {
		$(window).scroll(function () {
			var i = navTop-scrollTop;
			if (i <= 0) {
				nav.addClass('head_content_active');
				nav_list.addClass('nav_active');
				logo.addClass('logo_active');
			}
			if( i > 0){
				nav.removeClass('head_content_active');
				nav_list.removeClass('nav_active');
				logo.removeClass('logo_active');
			}
		});
	}
	main();
})