(function ($) {
    "user strict";

    $(document).ready(function() {
      // preloader
      $(".preloader").delay(500).animate({
        "opacity": "0"
      }, 500, function () {
          $(".preloader").css("display", "none");
      });
  });

  // scroll-to-top
var ScrollTop = $(".scrollToTop");
$(window).on('scroll', function () {
  if ($(this).scrollTop() < 500) {
      ScrollTop.removeClass("active");
  } else {
      ScrollTop.addClass("active");
  }
});
    
    //Create Background Image
  (function background() {
    let img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  })();
})(jQuery);


// side-bar
var menuBar = document.getElementById("menu-bar");
var ul = document.getElementById("ul")
menuBar.style.maxWidth = "0px"
ul.style.display = "none"

function toggle() {
    if (menuBar.style.maxWidth == "0px") {
        menuBar.style.maxWidth = "300px"
        ul.style.display = ""

    } else {
        menuBar.style.maxWidth = "0px"
        ul.style.display = "none"
    }
}

// eventSlider
var swiper = new Swiper('.event-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    speed: 1000,
    delay: 3000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
  }
});