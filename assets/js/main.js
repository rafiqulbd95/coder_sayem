$(document).ready(function () {
  $(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(window).on("scroll", function () {
    var qScroll = $(this).scrollTop();
    if (qScroll > 1) {
      $("#NavMenu").addClass("menu_fixed");
    } else {
      $("#NavMenu").removeClass("menu_fixed");
    }
  });

  $(window).on("scroll", function () {
    var topScroll = $(this).scrollTop();
    if (topScroll > 10) {
      $("#scroll-top").addClass("scroll-top");
    } else {
      $("#scroll-top").removeClass("scroll-top");
    }
  });

  $(window).on("load", function () {
    $(".preloder_area").fadeOut(1000);
  });
});
$(window).on("scroll", function () {
  var qScroll = $(this).scrollTop();
  if (qScroll > 1) {
      $("#NavMenu").addClass("menu-top");
  } else {
      $("#NavMenu").removeClass("menu-top");
  };
});

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});



$('.testimonial-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});
var typed = new Typed('#target', {
strings: ['Web Designer.', '&amp; Front End Web Developer.'],
typeSpeed: 50,
loop: true,
});