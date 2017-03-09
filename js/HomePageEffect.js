;$(function () {
	// param------------------------------------------------------//
	var scrollTop = $(document).scrollTop(),
		wh = $(window).height(),
		j = wh / 2 + 100;
	var advTop = $('.advantage_title').offset().top,
		courseTop = $('.course').offset().top,
		teacherTop = $('.teacher').offset().top;
	var advContent = $('.ad_content'),
		course_box = $('.course_box');
	var a=0,
		b=0,
		c=0,
		d=0;
	// API------------------------------------------------------//
	function main () {
		ad_content();
		course_content();
		teacher_content();
	}
	// get scroll------------------------------------------------------//
	$(window).scroll(function () {
		var x = $(document).scrollTop();
		scrollTop = x;
	})
	// advantage content effect------------------------------------------------------//
	function ad_content () {
		$(window).scroll(function () {
			var i = advTop - scrollTop;
			if ( i < j ) {
				advContent.animate({
					'opacity': '1',
					'marginTop': '0'
				},10);
			}
		});
	}
	function course_content () {
		$(window).scroll(function () {
			var i = courseTop - scrollTop;
			if ( i < j ) {
				course_box.animate({
					'opacity': '1',
					'marginTop': '0'
				},10);
			}
		});
	}
	// teacher counter------------------------------------------------------//
	function teacher_content () {
		$(window).scroll(function () {
			var i = teacherTop - scrollTop;
			var j = wh / 2;
			var l = wh / 2 - 10;
			console.log(i);
			console.log(j);
			if ( i > l && i < j ) {
				num_1();num_2();num_3();num_4();
			}
		});
	}
	function num_1(){
	   a = a + 1;
	   var o = document.getElementById('num_1');
	   o.innerHTML = a.toString() + "%";
	   if(a<120) setTimeout(num_1,10);
	}
	function num_2(){
	   b = b + 1;
	   var o = document.getElementById('num_2');
	   o.innerHTML = b.toString() + "%";
	   if(b<92) setTimeout(num_2,10);
	}
	function num_3(){
	   c = c + 1;
	   var o = document.getElementById('num_3');
	   o.innerHTML = c.toString() + "%";
	   if(c<97) setTimeout(num_3,10);
	}
	function num_4(){
	   d = d + 1;
	   var o = document.getElementById('num_4');
	   o.innerHTML = d.toString() + "%";
	   if(d<90) setTimeout(num_4,10);
	}
	// router
	main();
})