$(document).ready(function(){
    // JS for Owl-Carousel in News section
    $(".o-carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ["<span class='iconify' data-icon='charm:chevron-left'></span>","<span class='iconify' data-icon='charm:chevron-right'></span>"],
        responsive: {
            0:{
            items:1,
            nav: false
            },
            600:{
            items:2,
            nav: false
            }
        }
    });

    // JS for Owl-Carousel in YouTube section
    $(".y-carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        center: true,
        navText: ["<span class='iconify' data-icon='charm:chevron-left'></span>","<span class='iconify' data-icon='charm:chevron-right'></span>"],
        responsive: {
            0:{
            items:1,
            nav: false
            },
            800:{
            items:2,
            nav: false
            },
            1000:{
            items:3,
            nav: false
            }
        }
    });    
    
    // JS for Owl-Carousel in Stores section
    $(".s-carousel").owlCarousel({
        margin: 0,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        responsive: {
            0:{
            items:2,
            nav: false
            },
            800:{
            items:4,
            nav: false
            },
            1000:{
            items:6,
            nav: false
            }
        }
    });
});