$(document).ready(function() {
    $('.catalog-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        touchMove: true,
        asNavFor: 'catalog-slider__nav'
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
});