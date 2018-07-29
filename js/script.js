$(document).ready(function () {
    // isotope
    $(window).load(function(){
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
     
        $('.portfolioFilter a').click(function(){
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');
     
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
             return false;
        }); 
    });
    
    // initiate the wowjs
    new WOW().init();

    // Navigation Fixed
   $(window).scroll(function () {
    if($(window).scrollTop()){
        $('nav').addClass('fixed-top');
        $('ul').addClass('pr');
        $('.navbar').css('background', '#000000');
        $('.logo').css('padding-left', '3em');
    } else{
        $('nav').removeClass('fixed-top');
        $('.navbar').css('background', 'transparent');
        $('.navbar').css('transition', '.5s all');
    }
   })

})