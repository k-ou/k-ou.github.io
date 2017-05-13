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
function makeRoomForHeader() {
    const headerHeight = $(".header").outerHeight(true);
    const pages = [
        '.thumb',
        '.bio',
        '.project_page',
        '.project_page_ill',
    ];
    pages.forEach(
        classname =>
        $(classname).css("margin-top", headerHeight)
    )
};

makeRoomForHeader();
$(window).resize(makeRoomForHeader);

// carousel for illustration page

let slideIndex = 0;
const timer = setInterval(
    () => setCurrentSlide(++slideIndex, false),
    3000,
);

setCurrentSlide(slideIndex, false);

function setCurrentSlide(index, stopAutoplay = true) {
    hideAllSlides();

    
    const slides = $('.mySlides');
    
    slideIndex =
          index >= slides.length ? 0
        : index < 0              ? slides.length - 1
        : index;
    
    if (stopAutoplay) {
        clearInterval(timer);
        FB.AppEvents.logEvent('new_carousel_click', null, {
            slideIndex,
        });
    }

    slides.eq(slideIndex).show();
    $('.dot').eq(slideIndex).addClass('active');
}

function hideAllSlides() {
    $('.mySlides').each((_, slide) => $(slide).hide());
    $('.dot').each((_, dot) => $(dot).removeClass('active'));
}
