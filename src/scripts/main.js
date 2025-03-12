$(document).ready(function(){

    let header = $(".header");
    let headerHeight = header.outerHeight(); 
    let heroSection = $('.hero');
    let highlightSection = $(".highlight");
    let mylistSection = $(".mylist");
    let dropdown = $(".navigation__mobile__dropdown");
    let dropdownButton = $(".dropdown__button");
    let scrollToHero = $(".scrollToHero");
    let scrollToHightlights = $(".scrollToHighlights");
    let scrollToMylist = $(".scrollToMylist");

    let carouselHighlight = $('.highlight__carousel');
    let buttonPrevHighlight = $('#buttonPrevHighlight');
    let buttonNextHighlight = $('#buttonNextHighlight');

    let carouselList = $('.mylist__carousel');
    let buttonPrevList = $('#buttonPrevList');
    let buttonNextList = $('#buttonNextList');

    scrollToHero.on('click', function() {
        $('html, body').animate({
            scrollTop: heroSection.offset().top
        }, 600);
    })

    scrollToHightlights.on('click', function() {
        $('html, body').animate({
            scrollTop: highlightSection.offset().top
        }, 600);
    })

    scrollToMylist.on('click', function() {
        $('html, body').animate({
            scrollTop: mylistSection.offset().top
        }, 600);
    })


    dropdownButton.on("click", function(){
        dropdown.toggleClass('active');
    });

    $(window).on('scroll', function(){
        let currentPosition = window.scrollY;
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
        responsive: [
                {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: false,
                    draggable: true
                }
            },
            { 
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    draggable: true
                }
            }
        ]
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
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    autoplay: false,
                    autoplay: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
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