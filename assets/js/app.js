$(function() {
    let header = $('#header');
    let intro = $('#intro');
    let introHeight = $(intro).innerHeight();
    // =========================================================
    let scrollPosition = $(window).scrollTop();

    checkScroll(introHeight, scrollPosition);

    // =========================================================
    // Sticky header
    
    $(window).on('scroll resize', function() {
        introHeight = $(intro).innerHeight();
        scrollPosition = $(this).scrollTop();

        checkScroll(introHeight, scrollPosition);
    });

    function checkScroll(introHeight, scrollPosition) {
        if(scrollPosition >= introHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    };

    
    // =========================================================
    // smooth scroll

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let dataElement = $(this).data('scroll');
        let offsetTopElement = $(dataElement).offset().top;

        $('html, body').animate({
            scrollTop: ( offsetTopElement - header.innerHeight() ),
        }, 500);

        nav.removeClass('active');
        navToggle.removeClass('active');
    })


// =========================================================
    // mobile nav

    let nav = $('#nav');
    let navToggle = $('#navToggle');

    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('active');
        navToggle.toggleClass('active');
    })

    // =========================================================
    // slider reviews

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        arrows: false,

    });
    
});