    //    Working navigation when clicked

    (function (window) {

        'use strict';

        function init() {
            [].slice.call(document.querySelectorAll('.nav')).forEach(function (nav) {
                var navItems = [].slice.call(nav.querySelectorAll('.nav__item')),
                    itemsTotal = navItems.length,
                    setCurrent = function (item) {
                        // return if already current
                        if (item.classList.contains('nav__item--current')) {
                            return false;
                        }
                        // remove current
                        var currentItem = nav.querySelector('.nav__item--current');
                        currentItem.classList.remove('nav__item--current');

                        // set current
                        item.classList.add('nav__item--current');
                    };

                navItems.forEach(function (item) {
                    item.addEventListener('click', function () {
                        setCurrent(item);
                    });
                });
            });
        }

        init();

    })(window);

    //    Smooth Scrolling To Internal Links With jQuery
    $(document).ready(function () {
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing');

        });
    });

    //  Update active link in nav based on scroll
    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    const hash = window.location.hash === "" ?
        '#nav1' :
        window.location.hash;
    nav.find('a[href="' + hash + '"] button')
        .addClass('nav__item--current');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            if (
                cur_pos >= top &&
                cur_pos <= bottom &&
                !$('html, body').is(':animated')
            ) {
                nav.find('button')
                    .removeClass('nav__item--current');
                nav.find('a[href="#' + $(this).attr('id') + '"] button')
                    .addClass('nav__item--current');
            }
        });
    });

    // parallax for falling white people
    $(document).ready(function () {
        //$('html, body').animate({
        //		scrollTop: $('div#bg-3-4').offset().top+700
        //}, 15000);

        //	$(document).click(function(){
        //		$('html, body').stop(true);
        //	});

        $(window).scroll(function (e) {
            parallaxScroll();
        });

        function parallaxScroll() {
            var scrolled = $(window).scrollTop() - $(".white_guys").offset().top - 850;
            $('#parallax-bg-1').css('top', (0 - (scrolled * -1.4)) + 'px');
            $('#parallax-bg-2').css('top', (0 - (scrolled * -1.1)) + 'px');
            $('#parallax-bg-3').css('top', (0 - (scrolled * -.75)) + 'px');
        }

    });

    // sets up skrollr (used in title and quotes sections)
    var setSkrollr = function ($el, data) {
        for (var i = 0, l = data.length; i < l; i++) {
            var d = data[i],
                px = d[0];
            css = d[1];
            $el.attr('data-' + px, css);
        }
    }

    jQuery(function ($) {
        skrollr.init({
            smoothScrolling: false
        });
    });
