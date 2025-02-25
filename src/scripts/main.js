$(document).ready(function(){

    let carousel = $('.highlight__carousel')
    let buttonPrev = $('#buttonPrev');
    let buttonNext = $('#buttonNext');
    
    
    carousel.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        edgeFriction: 0,
        draggable: false
    });

    $('#buttonPrev').click(function(){
        carousel.slick('slickPrev');
    });

    $('#buttonNext').click(function(){
        carousel.slick('slickNext');
    });

    carousel.on('afterChange', function (event, slick, currentSlide) {
        console.log(currentSlide)

        if (currentSlide === 0) {
            buttonPrev.parent().addClass('v--hidden');
            buttonNext.parent().removeClass('v--hidden');
        } else {
            buttonNext.parent().addClass('v--hidden');
            buttonPrev.parent().removeClass('v--hidden');
        }
    });
}); 