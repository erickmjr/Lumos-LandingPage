$(document).ready(function(){

    let carousel = $('.catalog__carousel')

    carousel.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000
    });

    $('#buttonPrev').click(function(){
        carousel.slick('slickPrev');
    });

    $('#buttonNext').click(function(){
        carousel.slick('slickNext');
    });
});