$(document).ready(function() {
    $('.nav-left li a').hover(function() {
        $('.hover-menu').css('display', 'block');
    });

    $('.hover-menu').mouseleave(function() {
        $(this).css('display', 'none');
    });
});

