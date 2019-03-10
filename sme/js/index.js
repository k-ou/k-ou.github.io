function isMobile() {
    return ($(window).width() < 768);
}

$(document).ready(function () {
    if (isMobile()) {
        if ($('.arrow').hasClass('arrow-white')) {
            $('.arrow').attr('src', 'img/arrow-white-mobile.svg');
        } else if ($('.arrow').hasClass('arrow-dark')) {
            $('.arrow').attr('src', 'img/arrow-dark-mobile.svg');
            console.log('bacon');
        }
    }
});
