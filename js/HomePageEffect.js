;
$(function() {
    // param------------------------------------------------------//
    var scrollTop = $(document).scrollTop(),
        wh = $(window).height(),
        j = wh / 2 + 100;
    var advTop = $('.advantage_title').offset().top,
        courseTop = $('.course').offset().top,
        teacherTop = $('.teacher').offset().top,
        gulTop = $('.gul').offset().top,
        partner = $('.partner').offset().top;
    var advContent = $('.ad_content'),
        course_box = $('.course_box'),
        partner_box = $('.partner_carousel').find('ul');
    var a = 0,
        b = 0,
        c = 0,
        d = 0;
    // API------------------------------------------------------//
    function main() {
        ad_content();
        course_content();
        teacher_content();
        gul_content();
        parnter_content();
    }
    // get scroll------------------------------------------------------//
    $(window).scroll(function() {
            var x = $(document).scrollTop();
            scrollTop = x;
        })
        // advantage content effect------------------------------------------------------//
    function ad_content() {
        $(window).scroll(function() {
            var i = advTop - scrollTop;
            if (i < j) {
                advContent.animate({
                    'opacity': '1',
                    'marginTop': '0'
                }, 500);
            }
        });
    }
    // course content effect------------------------------------------------------//
    function course_content() {
        $(window).scroll(function() {
            var i = courseTop - scrollTop;
            if (i < j) {
                course_box.animate({
                    'opacity': '1',
                    'marginTop': '0'
                }, 500);
            }
        });
    }
    // teacher counter effect------------------------------------------------------//
    function num_1() {
        a = a + 1;
        var o = document.getElementById('num_1');
        o.innerHTML = a.toString() + "%";
        if (a < 120) setTimeout(num_1, 10);
    }

    function num_2() {
        b = b + 1;
        var o = document.getElementById('num_2');
        o.innerHTML = b.toString() + "%";
        if (b < 92) setTimeout(num_2, 10);
    }

    function num_3() {
        c = c + 1;
        var o = document.getElementById('num_3');
        o.innerHTML = c.toString() + "%";
        if (c < 97) setTimeout(num_3, 10);
    }

    function num_4() {
        d = d + 1;
        var o = document.getElementById('num_4');
        o.innerHTML = d.toString() + "%";
        if (d < 90) setTimeout(num_4, 10);
    }
    var onceCounter = once(function() {
        num_1();
        num_2();
        num_3();
        num_4();
    })

    function teacher_content() {
        $(window).scroll(function() {
            var i = teacherTop - scrollTop;
            if (i < j) {
                onceCounter();
            }
        });
    }
    // gul counter effect------------------------------------------------------//
    function gul_content() {
        $(window).scroll(function() {
            var i = gulTop - scrollTop;
            if (i < j) {
                $('.gul_1').animate({
                    'opacity': '1',
                    'marginTop': '0'
                }, 300, function() {
                    $('.gul_2').animate({
                        'opacity': '1',
                        'marginTop': '0'
                    }, 300, function() {
                        $('.gul_3').animate({
                            'opacity': '1',
                            'marginTop': '0'
                        }, 300)
                    })
                })
            }
        });
    }
    // partner parnter effect------------------------------------------------------//
    function parnter_content() {
        $(window).scroll(function() {
            var i = partner - scrollTop;
            if (i < j) {
                partner_box.animate({
                    'opacity': '1',
                }, 500);
            }
        });
    }
    // execute once function------------------------------------------------------//
    function once(fn, context) {
        var result;
        return function() {
            if (fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
            return result;
        };
    }
    // router----------------------------------------//
    main();
})
