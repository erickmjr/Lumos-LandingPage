$(document).ready(function(){

    const header = $(".header");
    const headerHeight = header.outerHeight(); 
    const heroSection = $('.hero');

    let carouselHighlight = $('.highlight__carousel');
    let buttonPrevHighlight = $('#buttonPrevHighlight');
    let buttonNextHighlight = $('#buttonNextHighlight');

    let carouselList = $('.mylist__carousel');
    let buttonPrevList = $('#buttonPrevList');
    let buttonNextList = $('#buttonNextList');

    $(window).on('scroll', function(){
        const currentPosition = window.scrollY;
        if (currentPosition >= (headerHeight - 40)) {
            header.addClass('header--is-hidden');
            heroSection.css("padding-top", `${headerHeight}px`);
        } else {
            header.removeClass('header--is-hidden');
            heroSection.css('padding-top', '0');
        }
    })
    
    carouselHighlight.slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        edgeFriction: 0,
        draggable: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                draggable: true
            }, 
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                draggable: true
            }
        }]
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

    carouselList.slick({
        slidesToShow: 4,
        autoplay: false,
        arrows: false,
        infinite: true,
        edgeFriction: 0,
        draggable: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            },
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                autoplay: false
            }
        }]
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
    
    function isMobileDevice() {
        return window.innerWidth <= 768;
    }
}); 