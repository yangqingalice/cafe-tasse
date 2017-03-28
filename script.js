$(document).ready(function(){


var change = $('#section1').offset().top - 80;
$(window).on('scroll',function(){
    stop = Math.round($(window).scrollTop());
    if (stop > change) {
        $("#color").fadeIn(400);
    } else {
        $("#color").fadeOut(400);
    }
});



});
