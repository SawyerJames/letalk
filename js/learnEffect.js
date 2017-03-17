;
$(function() {
    // param------------------------------------------------------//
    var scrollTop = $(document).scrollTop(),
        wh = $(window).height(),
        j = wh / 2 + 100;
    var learnTop = $('.learn').offset().top,
        heading1Top = $('.heading_1').offset().top,
        heading2Top = $('.heading_2').offset().top,
        heading3Top = $('.heading_3').offset().top,
        heading4Top = $('.heading_4').offset().top;
    var learnUl = $('.learn').find('ul'),
        learnLi = learnUl.find('li');
    // API------------------------------------------------------//
    function main() {
        learn_content();
        heading1();
        heading2();
        heading3();
        heading4();
    }
    // get scroll------------------------------------------------------//
    $(window).scroll(function() {
            var x = $(document).scrollTop();
            scrollTop = x;
        })
        // learn content effect------------------------------------------------------//
    function learn_content() {
        $(window).scroll(function() {
            var i = learnTop - scrollTop;
            if (i < j) {
                learnLi.eq(0).animate({ 'opacity': '1' }, 200, function() {
                    learnLi.eq(1).animate({ 'opacity': '1' }, 200, function() {
                        learnLi.eq(2).animate({ 'opacity': '1' }, 200, function() {
                            learnLi.eq(3).animate({ 'opacity': '1' }, 200, function() {
                                learnLi.eq(4).animate({ 'opacity': '1' }, 200);
                            });
                        });
                    });
                });
            }
        });
    }
    // heading1 content effect------------------------------------------------------//
    function heading1() {
        $(window).scroll(function() {
            var i = heading1Top - scrollTop;
            if (i < j) {
                $('.F1').animate({ 'opacity': '1', 'top': '120px' }, 500, function() {
                    $('.F2').animate({ 'opacity': '1', 'top': '250px' }, 500, function() {
                        $('.F3').animate({ 'opacity': '1', 'bottom': '70px' }, 500);
                    });
                });
            }
        });
    }
    // heading2 content effect------------------------------------------------------//
    function heading2() {
        $(window).scroll(function() {
            var i = heading2Top - scrollTop;
            if (i < j) {
                $('.heading_2_content').animate({ 'opacity': '1' }, 500);
            }
        });
    }
    // heading3 content effect------------------------------------------------------//
    function heading3() {
        $(window).scroll(function() {
            var i = heading3Top - scrollTop;
            if (i < j) {
                $('.heading_3').find('h1').animate({ 'fontSize': '26px', 'opacity': '1' }, 300);
                $('.heading_3').find('h5').animate({ 'fontSize': '18px', 'opacity': '1' }, 300);
                $('.heading_3').find('img').animate({ 'opacity': '1' }, 300);
            }
        });
    }
    // heading4 content effect------------------------------------------------------//
    function heading4() {
        $(window).scroll(function() {
            var i = heading4Top - scrollTop;
            if (i < j) {
                $('.h4_content').animate({
                    'opacity': '1',
                }, 500);
            }
        });
    }
    // main function------------------------------------------------------//
    main();
})
