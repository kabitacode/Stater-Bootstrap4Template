$(document).ready(function () {
    // isotope
    var $container = $('#portofolio .col-md-12');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration : 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.list_portofolio ul li a').click(function () {
        $('.list_portofolio ul li a.active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
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