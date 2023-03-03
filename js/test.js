//on scroll listener
$(document).scroll(function(e) {

    //shrinks menu on scroll
    if ($(document).scrollTop() > 100){
        $(".menu").addClass("shrink");
    }else {
        $(".menu").removeClass("shrink");
    }

});