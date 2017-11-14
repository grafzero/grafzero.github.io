// hamburger menu opening
$('.burger-wrapper').click (function(){
    $('.btn').toggleClass('open');
    $('.navigation').toggleClass('visible');
    $('.navigation-menu').toggleClass('visible');
    $('body').toggleClass('nav-visible');
});
