var lastScrollTop = 0;

// Sticky Header
$(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop && $(window).scrollTop() > 500) {
        // downscroll code
        $('.navigation').removeClass('sticky');
    } else {
        // upscroll code
        $('.navigation').addClass('sticky');
    }
    lastScrollTop = st;

});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.navigation').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
    } else {
        $('.navigation').addClass('open-nav');
    }
});

$('.navigation li a').click(function () {
    if ($('.navigation').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.navigation').removeClass('open-nav');
    }
});

// Navigation Scroll
//$('nav a').click(function (event) {
//    var id = $(this).attr("href");
//    var offset = 70;
//    var target = $(id).offset().top - offset;
//    $('html, body').animate({
//        scrollTop: target
//    }, 800);
//    event.preventDefault();
//});
