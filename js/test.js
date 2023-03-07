//runs when html is ready
$(document).ready(async function(e) {

    $(".back-to-top").click(function(e) {
        // window.scrollTo(0, 0);
        window.scroll({top: 0,  left: 0, behavior: 'smooth' });
    });

    //sets the footer submit button length
    let width = 16;
    let inputs = await $(".footer-form .inputs").children();
    width += $(inputs[0]).width();
    width += $(inputs[1]).width();
    $(".footer-submit").css("width", `${width}px`)
});

//on scroll listener
$(document).scroll(function(e) {

    //shrinks menu on scroll
    if ($(document).scrollTop() > 100){
        $(".menu").addClass("shrink");
    }else {
        $(".menu").removeClass("shrink");
    }

});