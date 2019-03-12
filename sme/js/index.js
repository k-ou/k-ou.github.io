let windowWidth = isMobile();

$(window).on('resize', function () {
    if (windowWidth != isMobile()) {
        windowWidth = isMobile();
        if ($('img').hasClass('dashes')) {
            $('.divider img').attr('src', 'img/divider-01-sm.svg');
            $('.divider img').removeClass('dashes').addClass('dashes-sm');
        } else if ($('img').hasClass('dashes-sm')) {
            $('.divider img').attr('src', 'img/divider-01.svg');
            $('.divider img').removeClass('dashes-sm').addClass('dashes');
        }
    }
});

function isMobile() {
    return ($(window).width() < 768);
}
