// svg preloader
$(window).on('load', function(){

    if(navigator.language != 'pl'){
        switchLanguage('en', 'pl');

    } else {
        switchLanguage('pl', 'en');

    }

    $('#preloader').fadeOut(2000);
});


// localization to pl
$('div.language.pl.transparent').click(function(){
   // console.log('swotching to PL');
    switchLanguage('pl', 'en');

});

// localization to en
$('div.language.en.transparent').click(function(){
  //  console.log('switching to EN');
    switchLanguage('en', 'pl');

});



function switchLanguage(languageCode, codeForButton){
    var opts = {language: languageCode, pathPrefix: "lang"};
    //console.log('Switching language to ' + languageCode);
    $('div.language.'+codeForButton+'.transparent').removeClass("active");
    $('div.language.'+languageCode+'.transparent').addClass("active");
    $("[data-localize]").localize("slotwa", opts);


}


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

    // Currently not used, scroll to section with project when project is clicked
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















