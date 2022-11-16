//expands welcome image on load
$(document).ready(function(e) {
    //   setTimeout(() => {}, "2500");
    $('.loading').hide();
    $('.content').show();
    $(".welcome .right img").css("width", "640px");
    carousel('.professional .right');
    carousel('.meme .right');

    //expands image dropdown
    $('.expandable-title').click(function(e) {
      let c = $(this).children();
      $(this).parent().next().toggle('fast')
      if ($(c[0]).text() == "Show more") {
        $(c[0]).text("Show less");
        $(c[1]).css("transform", "rotate(180deg)");
      } else {
        $(c[0]).text("Show more");
        $(c[1]).css("transform", "rotate(0deg)");
      }
    })
});

//on scroll listener
$(document).scroll(function(e) {

    //shrinks menu on scroll
    if ($(document).scrollTop() > 100){
        $(".menu").addClass("shrink");
    }else {
        $(".menu").removeClass("shrink");
    }

    //changes element when on screen
    if ($('.section.hidden')) {
      if ($('.section.hidden').isOnScreen()) {
          $('.rising-img').css("bottom", "-100px")
          $('.section.hidden').css("opacity", "1");
      } else {
          $('.section.hidden').css("opacity", "0");
          $('.rising-img').css("bottom", "-468px")
      }
    }
});






// $(".item-title").click(function(e) {
//     $(".selected").removeClass("selected");
//     $(this).parent().addClass("selected");
//     $('.content-container').hide();
//     $(`.${$(this).data("content")}`).show();
// });

// $(".home-link").click(function(e) {
//     $(".selected").removeClass("selected");
//     $('.content-container').hide();
//     $('.content-container.home').show();
// });








function carousel(elPrefix) {
  let images = ['./images/McCorn.jpg', './images/BEES.jpg', './images/bukkakeBrunch.jpg', './images/DOOM.jpg', './images/BEES.jpg'];
  // new carousel
  const $ = selector => {
    return document.querySelector(selector);
  };

  function next() {
    let index;
    if ($(".hide")) {
      index = $(".hide").dataset.index;
      $(".hide").remove(); 
    }
  
    /* Step */
  
    if ($(".prev")) {
      $(".prev").classList.add("hide");
      $(".prev").classList.remove("prev");
    }
  
    $(".act").classList.add("prev");
    $(".act").classList.remove("act");
  
    $(".next").classList.add("act");
    $(".next").classList.remove("next");
  
    /* New Next */
  
    $(".new-next").classList.remove("new-next");
  
    const addedEl = document.createElement('li');
    addedEl.style.backgroundImage = `url(${images[index]})`;
    addedEl.dataset.index = index;
  
    $(".list").appendChild(addedEl);
    addedEl.classList.add("next","new-next");
  }

  function prev() {
    let index;
    index = $(".new-next").dataset.index;
    $(".new-next").remove();
      
    /* Step */

    $(".next").classList.add("new-next");

    $(".act").classList.add("next");
    $(".act").classList.remove("act");

    $(".prev").classList.add("act");
    $(".prev").classList.remove("prev");

    /* New Prev */

    $(".hide").classList.add("prev");
    $(".hide").classList.remove("hide");

    const addedEl = document.createElement('li');
    addedEl.style.backgroundImage = `url(${images[index]})`;
    addedEl.dataset.index = index;

    $(".list").insertBefore(addedEl, $(".list").firstChild);
    addedEl.classList.add("hide");
  }

  slide = element => {
    /* Next slide */
    
    if (element.classList.contains('next')) {
      next();
      
    /* Previous slide */
      
    } else if (element.classList.contains('prev')) {
      prev();
    }
  }

  const slider = $(`${elPrefix} .list`),
        swipe = new Hammer($(`${elPrefix} .swipe`));

  slider.onclick = event => {
    slide(event.target);
  }

  swipe.on("swipeleft", (ev) => {
    next();
  });

  swipe.on("swiperight", (ev) => {
    prev();
  });
}








//image carousel
// $num = $('.my-card').length;
// $even = $num / 2;
// $odd = ($num + 1) / 2;

// if ($num % 2 == 0) {
//   $('.my-card:nth-child(' + $even + ')').addClass('active');
//   $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
//   $('.my-card:nth-child(' + $even + ')').next().addClass('next');
// } else {
//   $('.my-card:nth-child(' + $odd + ')').addClass('active');
//   $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
//   $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
// }

// $('.my-card').click(function() {
//   $slide = $('.active').width();
//   console.log($('.active').position().left);
  
//   if ($(this).hasClass('next')) {
//     $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
//   } else if ($(this).hasClass('prev')) {
//     $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
//   }
  
//   $(this).removeClass('prev next');
//   $(this).siblings().removeClass('prev active next');
  
//   $(this).addClass('active');
//   $(this).prev().addClass('prev');
//   $(this).next().addClass('next');
// });


// // Keyboard nav
// $('html body').keydown(function(e) {
//   if (e.keyCode == 37) { // left
//     $('.active').prev().trigger('click');
//   }
//   else if (e.keyCode == 39) { // right
//     $('.active').next().trigger('click');
//   }
// });













//tests if element is on screen
$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    bounds.bottom = bounds.top + this.outerHeight();
    // console.log(bounds.bottom - this.outerHeight(), " vs ", viewport.bottom);


    // return (viewport.bottom > bounds.bottom - this.outerHeight());

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};