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
    const pages = [".thumb", ".bio", ".project_page", ".project_page_ill"];
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

// new illustration carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// autoplay carousel

//var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}
