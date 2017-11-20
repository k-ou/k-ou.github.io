// Sticky Header
$(window).scroll(function () {

    if ($(window).scrollTop() > 100) {
        $('.navigation').addClass('sticky');
    } else {
        $('.navigation').removeClass('sticky');
    }
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

// Navigation Scroll - ljepo radi materem
$('nav a').click(function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
