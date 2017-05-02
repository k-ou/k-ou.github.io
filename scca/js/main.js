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
