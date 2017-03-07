;$(function(){
	//param
	var course_1 = $('.C1');
	var course_2 = $('.C2');
	var course_txt_1 = course_1.find('span');
	var course_txt_2 = course_2.find('span');
	var ct1 = $('.ct1');
	var ct2 = $('.ct2');
	// main function
	function main () {
		edslider();
		course1(course_1);
		course1(ct1);
		course2(course_2);
		course2(ct2);
	}
	// header carousel function
	function edslider () {
		$('.carousel').edslider({
			width : '100%',
			height: 500,
			interval  : 3000
		});
	}
	function course1 (param) {
		param.on('mouseenter', function() {
			course_txt_1.animate({fontSize: "35px"}, 50).css('display', 'inline-block');
			ct1.css({color: '#ffffff',background: '#0e2e5f'});
		});
		param.on('mouseleave', function() {
			course_txt_1.animate({fontSize: "30px"}, 100).hide();
			ct1.css({color: '#ffffff',background: '#b60f29'});
		});
	}
	function course2 (param) {
		param.on('mouseenter', function() {
			course_txt_2.animate({fontSize: "35px"}, 50).css('display', 'inline-block');
			ct2.css({color: '#ffffff',background: '#0e2e5f'});
		});
		param.on('mouseleave', function() {
			course_txt_2.animate({fontSize: "30px"}, 100).hide();
			ct2.css({color: '#ffffff',background: '#b60f29'});
		});		
	}
	// API
	main();
});