$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#button-scroll-top').fadeIn();
    } else {
        $('#button-scroll-top').fadeOut();
    }
});
$('#button-scroll-top').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
    return false;
});
