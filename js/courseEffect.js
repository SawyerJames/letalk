;
$(function() {
    // param -----------------------------------------------------//
    var scrollTop = $(document).scrollTop(),
        wh = $(window).height(),
        j = wh / 2;
    var contentTop = $('.content').offset().top,
        content2_Top = $('.content_2').offset().top;
    // API-----------------------------------------------------//
    function main() {
        content();
        content_2();
    }
    // get scroll -----------------------------------------------------//
    $(window).scroll(function() {
            var x = $(document).scrollTop();
            scrollTop = x;
        })
        // app content function -----------------------------------------------------//
    function content() {
        $(window).scroll(function() {
            var i = contentTop - scrollTop;
            if (i < j) {
                $('.content').find('.imgContent').animate({ "opacity": "1" }, 500);
            }
        })
    }
    // app content function -----------------------------------------------------//
    function content_2() {
        $(window).scroll(function() {
            var i = content2_Top - scrollTop;
            if (i < j) {
                $('.content_2').find('.lesson_1').animate({ "opacity": "1", "margin": "0 30px" }, 500);
                $('.content_2').find('.lesson_2').animate({ "opacity": "1", "margin": "0 30px" }, 500);
            }
        })
    }
    // MAIN function -----------------------------------------------------//
    main();
})
