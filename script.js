$(document).ready(function() {
    $('.catalog-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        touchMove: true,
        asNavFor: '.catalog-slider__nav'
    });
    $('.catalog-slider__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.catalog-slider',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.slicker').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $("#sale-blocks-dots"),
        dotsClass: 'btn-slick'
    });

    $('.burger-icon').on('click', function() {
        $(this).toggleClass('burger-icon__close');
        $('.toggle-block').toggleClass('toggle-block__close')
    });

    $('.video-circle').on('click', function() {
        $('.popup-bg').addClass('popup-active');
    })

    $('.popup-video').on('click', function() {
        $('.popup-bg').removeClass('popup-active');
    })

    $('button[role="tab"]').empty();
});