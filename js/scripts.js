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
    
    $('.slideshow-container').height($('.mySlides').height());

};

makeRoomForHeader();
$(window).resize(makeRoomForHeader);
$('.mySlides img').each((_, img) => {
   $(img).load(makeRoomForHeader);
});

// carousel for illustration page

let slideIndex = 0;
const timer = setInterval(
    () => setCurrentSlide(++slideIndex, false),
    6000,
);

const duration = 1000;

const hideAllSlides = (shouldAnimate = true) => {
    $('.mySlides').each((_, slide) => {
        shouldAnimate
            ? $(slide).animate(
                {opacity: 0},
                {duration, queue: false}
            )
            : $(slide).css('opacity', 0);
    });
    $('.dot').each((_, dot) => $(dot).removeClass('active'));
}

function setCurrentSlide(
    index,
    stopAutoplay = true,
    shouldAnimate = true,
) {
    hideAllSlides(shouldAnimate);
    
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

    shouldAnimate
        ? slides.eq(slideIndex).animate({opacity:1}, {duration})
        : slides.eq(slideIndex).css('opacity', 1);
    $('.dot').eq(slideIndex).addClass('active');
}

setCurrentSlide(slideIndex, false, false);

$(() => {
    $('.slideshow-container').on('swipeleft', event => {
        setCurrentSlide(++slideIndex);
    });
    $('.slideshow-container').on('swiperight', event => {
        setCurrentSlide(--slideIndex);
    });
});
