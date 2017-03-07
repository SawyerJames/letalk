;$(function () {
	var login = $('.login');
	var bodyMask = $('#bg');
	var le_window = $('#log-reg');
	var exit = $('#close');
	var enter = $('#enter');
	login.on('click',function () {
		bodyMask.css('display', 'block');
		le_window.css('display', 'block');
	})
	exit.on('click',function () {
		bodyMask.css('display', 'none');
		le_window.css('display', 'none');
	});
	enter.on('click',function () {
		bodyMask.css('display', 'none');
		le_window.css('display', 'none');
	});
})