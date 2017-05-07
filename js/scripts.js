// reduce header height on scroll

//function init() {
//    window.addEventListener('scroll', function (e) {
//        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//            shrinkOn = 100;
//        
//        const func = distanceY > shrinkOn
//            ? 'addClass'
//            : 'removeClass';
//        const header = $('.header');
//        const isSmaller = header.hasClass('smaller');
//        const dontAnimate = (isSmaller && func === 'addClass')
//            || (!isSmaller && func === 'removeClass')
//            || header.is(':animated');
//        if (dontAnimate) {
//            return;
//        }
//        console.log(func);
//        $('.header')[func]('smaller', {
//            children: true,
//        });
//    });
//}
//window.onload = init();

function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector(".header");
        if (distanceY > shrinkOn) {
            $(".header").addClass("smaller");
        } else {
            if ($(".header").hasClass("smaller")) {
                $(".header").removeClass("smaller");
            }
        }
    });
}
window.onload = init();


// add margin-top to pages to allow room for header
const makeRoomForHeader = () => {
    const headerHeight = $(".header").outerHeight(true);
    const pages = [".thumb", ".bio", ".project_page"];
    pages.forEach(
        classname =>
        $(classname).css("margin-top", headerHeight)
    )
};

$(window).resize(makeRoomForHeader);

// carousel for illustration page

$(document).ready(function ($) {

    makeRoomForHeader();

    $('#myCarousel').carousel({
        interval: 5000
    });

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            FB.AppEvents.logEvent("carousel_click", null, {
                id: id
            });
            $('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
});
