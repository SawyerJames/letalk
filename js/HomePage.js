;$(function(){
	//param
	var  c1 = $('.C1'),
		 c2 = $('.C2'),
		 course_content1 = $('.mask1'),
		 course_content2 = $('.mask2'),
		 mask1_Btn1 = course_content1.find('.btn1'),
		 mask1_Btn2 = course_content1.find('.btn2'),
		 mask2_Btn1 = course_content2.find('.btn1'),
		 mask2_Btn2 = course_content2.find('.btn2');
	// main function
	function main () {
		edslider();
		course1();
		course2();
	}
	// header carousel function
	function edslider () {
		$('.carousel').edslider({
			width : '100%',
			height: 500,
			interval  : 3000
		});
	}
	//function course mouse event
	function course1 () {
		c1.mouseenter(function () {
			course_content1.show();
			mask1_Btn1.animate({opacity: 1,left:'160px'}, 100);
			mask1_Btn2.animate({opacity: 1,left:'160px'}, 100);
		});
		course_content1.mouseleave(function () {
			course_content1.hide();
			mask1_Btn1.animate({opacity: 0,left:'40px'}, 10);
			mask1_Btn2.animate({opacity: 0,left:'40px'}, 10);
		});
	}
	function course2 () {
		c2.mouseenter(function () {
			course_content2.show();
			mask2_Btn1.animate({opacity: 1,left:'160px'}, 100);
			mask2_Btn2.animate({opacity: 1,left:'160px'}, 100);
		});
		course_content2.mouseleave(function () {
			course_content2.hide();
			mask2_Btn1.animate({opacity: 0,left:'40px'}, 10);
			mask2_Btn2.animate({opacity: 0,left:'40px'}, 10);
		});
	}
	// API
	main();
});