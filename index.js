// ES6 Format.

//click event for hamburger menu display.
$(".hamburger").on("click", function() {
    
    if($(window).width() <= 868) {
        var x = $("nav ul");
        if(x.css("display") === "flex") {
            x.css("display", "none");
        } 
        else {
            x.css("display", "flex");
        }
    }
});


if($(window).width() > 868) {
    $("nav ul").css("display", "flex");
}

else {
    $("nav ul").css("display", "none");
}


//click event for cicking any link inside the hamburger menu.
$("nav ul a").on("click", function() {

    if($(window).width() <= 868) {
        var x = $("nav ul");
        if(x.css("display") === "flex") {
            x.css("display", "none");
        } 
        else {
            x.css("display", "flex");
        }
    } 
});


//animation function.
;(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i,el) {
            function visPx() {

                var H = $(this).height(),
                r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
                return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
            } 
            visPx();
        
        $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));


//animation for h2 and h6.
$("h6").inViewport(function(px){
    
    $("h2").inViewport(function(px){
        if(px) {        
            $(this).addClass("h2-animate");
            $(this).css("opacity", "1");
        }
    });

    if(px) {
        $(this).addClass("h6-animate");
        $(this).css("opacity", "1");
    }
});


//animation for services cards.
$(".services-col1, .services-col2, .services-col3").inViewport(function(px){
    if(px) {
        $(this).addClass("services-animate");
        $(this).css("opacity", "1");
    }
});

