;$(function(){
// param -----------------------------------------------------//
	var scrollTop = $(document).scrollTop(),
		wh = $(window).height(),
		j = wh / 2;
	var aboutBtn = $('.about'),
		contactBtn = $('.contact'),
		tab_abtout = $('.tab_about'),
		tab_contact = $('.tab_contact');
	var appTop = $('.app').offset().top,
		questionTop = $('.question').offset().top,
		joinTop = $('.join').offset().top;
// API-----------------------------------------------------//
	function main () {
		clickTab();
		app();
		question();
		join();
	}
// get scroll -----------------------------------------------------//
	$(window).scroll(function () {
		var x = $(document).scrollTop();
		scrollTop = x;
	})
// click tab function -----------------------------------------------------//
	function clickTab () {
		aboutBtn.on('click', function() {
			aboutBtn.addClass('tab_active');
			contactBtn.removeClass('tab_active');
			tab_abtout.show(400);
			tab_contact.hide();
		});
		contactBtn.on('click', function() {
			contactBtn.addClass('tab_active');
			aboutBtn.removeClass('tab_active');
			tab_contact.show(400);
			tab_abtout.hide();
		});
	}
// app content function -----------------------------------------------------//
	function app () {
		$(window).scroll(function () {
			var i = appTop - scrollTop;
			if ( i < (j + 200) ) {
				$('.app').find('ul').animate({"opacity":"1"},500);
			}
		})
	}
// question content function -----------------------------------------------------//
	function question () {
		$(window).scroll(function () {
			var i = questionTop - scrollTop;
			if ( i < (j + 200) ) {
				$('.question').find('ul').animate({"opacity":"1"},500);
			}
		})
	}
// join content function -----------------------------------------------------//
	function join () {
		$(window).scroll(function () {
			var i = joinTop - scrollTop;
			if ( i < (j + 200) ) {
				$('.join').find('.join_content').animate({"opacity":"1"},500);
			}
		})
	}
// MAIN function -----------------------------------------------------//
	main();
})