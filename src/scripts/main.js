$(document).ready(function(){

    let carouselHighlight = $('.highlight__carousel');
    let buttonPrevHighlight = $('#buttonPrevHighlight');
    let buttonNextHighlight = $('#buttonNextHighlight');
    
    carouselHighlight.slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        edgeFriction: 0,
        draggable: false
    });

    buttonPrevHighlight.click(function(){
        carouselHighlight.slick('slickPrev');
    });

    buttonNextHighlight.click(function(){
        carouselHighlight.slick('slickNext');
    });

    carouselHighlight.on('afterChange', function (event, slick, currentSlide){
        if (currentSlide === 0) {
            buttonPrevHighlight.parent().addClass('v--hidden');
            buttonNextHighlight.parent().removeClass('v--hidden');
        } else if ((currentSlide >= 3) && (currentSlide < 6)) {
            buttonPrevHighlight.parent().removeClass('v--hidden');
            buttonNextHighlight.parent().removeClass('v--hidden');
        } else { 
            buttonNextHighlight.parent().addClass('v--hidden');
            buttonPrevHighlight.parent().removeClass('v--hidden');
        }
    });

    let carouselList = $('.mylist__carousel');
    let buttonPrevList = $('#buttonPrevList');
    let buttonNextList = $('#buttonNextList');
    
    carouselList.slick({
        slidesToShow: 4,
        autoplay: false,
        arrows: false,
        infinite: true,
        edgeFriction: 0,
        draggable: true
    });
    
    buttonPrevList.click(function(){
        carouselList.slick('slickPrev');
    });

    buttonNextList.click(function(){
        carouselList.slick('slickNext');
    });

    let form = $(".form");

    form.on('submit', function(e){
        e.preventDefault();
    })

    form.validate({

        errorElement: "div",
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent());
        },

        rules: {
            email: {
                required: true
            }
        },

        messages: {
            email: {
                required: "Digite um endereço de e-mail.",
                email: "Por favor, digite um e-mail válido."
            }
        }
    })

}); 