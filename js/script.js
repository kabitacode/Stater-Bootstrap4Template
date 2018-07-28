$(document).ready(function () {
    
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