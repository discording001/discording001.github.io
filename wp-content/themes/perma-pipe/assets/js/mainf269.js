jQuery(document).ready(function ($) {

    $('.swipe-popup').swipebox();
	
    $('.header-logo .menu-toggle').click(function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.header-menu-area').slideUp();
        } else {
            $(this).addClass('active');
            $('.header-menu-area').slideDown();
        }
    });
    

    var wow = new WOW({
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    });
    wow.init();
    
    // $('.preloader-wrapper').fadeOut('slow');
    
    $('.project-tabs a').click(function(e){
        e.preventDefault();
        var tabID = $(this).data('id');
        $('.project-tabs a').removeClass('active');
        $(this).addClass('active');
        $('.projects-tab-wrapper').hide();
        $('#'+tabID).addClass('active').css({'display':'flex'});
    });
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    
    $('.back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
    
    mobileMenu();

});

jQuery(window).resize(function(){
    mobileMenu();
});


function mobileMenu(){
    var winWidth = jQuery(window).width();
    if(winWidth < 992) {
        if(jQuery('.dropdown-indicator').length == '') {
            jQuery('.menu .menu-item.menu-item-has-children').append('<span class="dropdown-indicator"></span>');
        }
        jQuery('.dropdown-indicator').click(function(){
            if(jQuery(this).hasClass('active')) {
                jQuery(this).removeClass('active');
                jQuery(this).closest('.menu-item-has-children').removeClass('active');
            } else {
                jQuery(this).addClass('active');
                jQuery(this).closest('.menu-item-has-children').addClass('active');
            }
        });
    } else {
        jQuery('.dropdown-indicator').remove();
    }
}