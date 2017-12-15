// svg preloader
$(window).on('load', function(){
    // var now = new Date().getTime();
    // var page_load_time = now - performance.timing.navigationStart;
    // console.log("User-perceived page loading time: " + page_load_time);
var preloader = $('polygon');
    var polygonsFill = [];
    var polygons = $('svg polygon');
    polygons.each(function(){
        polygonsFill.push($(this).attr("fill"));
        $(this).removeAttr("fill");
        console.log('Removing fill!');
       // $('#preloader').hide().show(0);
        preloader[0].style.display='none';
        preloader[0].offsetHeight; // no need to store this anywhere, the reference is enough
        preloader[0].style.display='block';


    });


    polygons.each(function(index,element){
        addFill(index,element);
        $('#preloader').first().hide().show(0);
        sleep(10);
    });


    function addFill(polygonIndex, polygon){
        polygon.setAttribute("fill", "rgb(15,32,43)");

    }









    $('#preloader').delay(1000).fadeOut();


    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }



});


// hamburger menu opening
$('.burger-wrapper').click (function(){
    window.scrollTo(0, 0);
    $('.btn').toggleClass('open');
    $('.navigation').toggleClass('visible');
    $('.navigation-menu').toggleClass('visible');
    $('body').toggleClass('nav-visible');
    $('.name-intro').toggleClass('name-intro-menu-layout');
    $('.layer').toggleClass('zoomed');
});


var projectToggleDuration = 500;

//project show
$('article.project:not(.inactive)').click (function(data){
    var projectId = '#project' + $(this).data('item');
    $(projectId).toggle(projectToggleDuration);
    $(projectId).addClass('active');

    //scroll to section with project when project is clicked
   // $("html, body").animate({ scrollTop: $('#projects').offset().top }, 1000);

    //disable scroling when project is displayed
    $('body').css('overflow','hidden');

});

//project close
$('span.close').click (function(){
    var activeProjects  = $('.project_full.active');
    activeProjects.toggle(projectToggleDuration);
    activeProjects.removeClass("active");

    // enable scrolling on page when project is closed
    $('body').css('overflow-y','scroll');
});



//menu position chosen
$('ul.nav-ul li[data-item]').click (function(){
    window.scrollTo(0, 0);
    $('.btn').toggleClass('open');
    $('.navigation').toggleClass('visible');
    $('.navigation-menu').toggleClass('visible');
    $('body').toggleClass('nav-visible');
    $('.name-intro').toggleClass('name-intro-menu-layout');
    $('.layer').toggleClass('zoomed');

    var projectId = '#project' + $(this).data('item');
    $(projectId).toggle(projectToggleDuration);
    $(projectId).addClass('active');

    //scroll to section with project when project is clicked
    $("html, body").animate({ scrollTop: $('#projects').offset().top }, 1000);

    //disable scroling when project is displayed
    $('body').css('overflow','hidden');
});

$('ul.nav-ul li#contactLink').click (function(){
    window.scrollTo(0, 0);
    $('.btn').toggleClass('open');
    $('.navigation').toggleClass('visible');
    $('.navigation-menu').toggleClass('visible');
    $('body').toggleClass('nav-visible');
    $('.name-intro').toggleClass('name-intro-menu-layout');
    $('.layer').toggleClass('zoomed');


    //scroll to section with project when project is clicked
    $("html, body").animate({ scrollTop: $('#contacts').offset().top }, 1000);


});


// localization to pl
$('div.language.pl.transparent').click(function(){
    $("[data-localize]").localize("slotwa");
});












