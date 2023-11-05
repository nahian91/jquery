$(document).ready(function() {

    $('.slider-area').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
    })

    $('#menu').slicknav();
    $('.counter').counterUp({
        delay: 1,
        time: 5000
    });
    
    $(".box").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 30,
        nav: true,
        navText: ["Previous", "Next"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3,
                loop: false
            },
            1000: {
                items: 3,
                loop: true
            }
        }
    });
})


$(window).scroll(function(){
    if($(this).scrollTop() > 20){
        $('.header-area').addClass('sticky')
    } else{
        $('.header-area').removeClass('sticky')
    }
});