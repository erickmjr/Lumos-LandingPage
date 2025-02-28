$(document).ready(function(){

    let carousel = $('.highlight__carousel');
    let buttonPrev = $('#buttonPrev');
    let buttonNext = $('#buttonNext');
    
    carousel.slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        edgeFriction: 0,
        draggable: false
    });

    buttonPrev.click(function(){
        carousel.slick('slickPrev');
    });

    buttonNext.click(function(){
        carousel.slick('slickNext');
    });

    carousel.on('afterChange', function (event, slick, currentSlide) {
        console.log(currentSlide)
        if (currentSlide === 0) {
            buttonPrev.parent().addClass('v--hidden');
            buttonNext.parent().removeClass('v--hidden');
        } else if ((currentSlide >= 3) && (currentSlide < 6)) {
            buttonPrev.parent().removeClass('v--hidden');
            buttonNext.parent().removeClass('v--hidden');
        } else { 
            buttonNext.parent().addClass('v--hidden');
            buttonPrev.parent().removeClass('v--hidden');
        }
    });

}); 