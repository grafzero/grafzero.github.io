window.addEventListener("scroll", function(event){
  //  console.log("scrolling!");
    'use strict';
    var layers, topDistance;

    topDistance = this.pageYOffset;

    //console.log("Dystans od góry: "+topDistance);

    layers = document.querySelectorAll("[data-type='paralax']");

    var depth, i, layer, len, movement, translate3d;

    for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute('data-depth');
        movement = -(topDistance * depth);

        translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layer.style.transition ='none';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
    }


    $(window).scrollEnd(function(){
      //  console.log('stopped scrolling');
        for (i = 0, len = layers.length; i < len; i++) {
            layer = layers[i];
            layer.style.removeProperty('transition');
        }
    }, 500);






});


// extension:
$.fn.scrollEnd = function(callback, timeout) {
    $(this).scroll(function(){
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback,timeout));
    });
};


