;
$(function() {
    // param------------------------------------------------------//
    var scrollTop = $(document).scrollTop(),
        wh = $(window).height(),
        j = wh / 2 + 100;
    var heading1Top = $('.heading_1').offset().top,
        heading2Top = $('.heading_2').offset().top;
    var h1_div = $('.content').find('div'),
        h2_li = $('.h2_content').find('ul').find('li');
    // API------------------------------------------------------//
    function main() {
        heading1();
        heading2();
    }
    // get scroll------------------------------------------------------//
    $(window).scroll(function() {
            var x = $(document).scrollTop();
            scrollTop = x;
        })
        // heading1 content effect------------------------------------------------------//
    function heading1() {
        $(window).scroll(function() {
            var i = heading1Top - scrollTop;
            if (i < j) {
                h1_div.eq(0).animate({ 'opacity': '1', 'marginTop': '50px' }, 300, function() {
                    h1_div.eq(1).animate({ 'opacity': '1', 'marginTop': '50px' }, 300, function() {
                        h1_div.eq(2).animate({ 'opacity': '1', 'marginTop': '50px' }, 300);
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
                h2_li.eq(0).animate({ 'opacity': '1', 'marginLeft': '0px' }, 300, function() {
                    h2_li.eq(1).animate({ 'opacity': '1', 'marginLeft': '0px' }, 300, function() {
                        h2_li.eq(2).animate({ 'opacity': '1', 'marginLeft': '0px' }, 300);
                    });
                });
            }
        });
    }
    // main function------------------------------------------------------//
    main();
})
