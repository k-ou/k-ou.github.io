$(document).ready(function () {
    $("#navbar-container").load("navbar.html", navState);
    $("#footer-container").load("footer.html");
});

var lastScrollTop = 0;

// Sticky Header
$(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop && $(window).scrollTop() > 250) {
        // downscroll code
        //        $('.navigation').removeClass('sticky');
        $('#navbar-container').removeClass('sticky');
    } else {
        // upscroll code
        $('#navbar-container').addClass('sticky');
    }
    lastScrollTop = st;

});

function navState() {
    currentPage();
    mobileState();
}

// Mobile Navigation
function mobileState() {
    $('.mobile-toggle').click(function () {
        if ($('#navbar-container').hasClass('open-nav')) {
            $('#navbar-container').removeClass('open-nav');
        } else {
            $('#navbar-container').addClass('open-nav');
        }
    });
    $('nav li a').click(function () {
        if ($('#navbar-container').hasClass('open-nav')) {
            $('#navbar-container').removeClass('open-nav');
            $('#navbar-container').removeClass('open-nav');
        }
    });
}

function currentPage() {
    var path = location.pathname;
    if (path.length <= 1) {
        return;
    }
    var n = path.lastIndexOf('/');
    var current = path.substring(n + 1);
    $('#navbar-menu li a').each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr('href').indexOf(current) !== -1) {
            $this.addClass('navbar-active');
        }
    })
}
