$(document).ready(function () {
  //new WOW().init();

  $(".sliderbuddyimg").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".sliderbuddy",
  });
  $(".sliderbuddy").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".sliderbuddyimg",
    dots: true,
    arrows: false,
    focusOnSelect: true,
  });

  $(".autoplay").slick({
    centerMode: true,
    centerPadding: "60px",

    // autoplay: true,
    // autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // mobileWrapSlider
  $(".mobileWrapSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 1000,
    asNavFor: ".slider-wrap",
  });

  // $(".slider-wrap").slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   arrows: false,
  //   fade: false,
  // });

  $(".slider-wrap").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    infinite: false,
    vertical: true,
    focusOnSelect: true,
    asNavFor: ".mobileWrapSlider",
  });
  $(".slider-wrap").on("click", ".slick-slide", function () {
    $(".mobileWrapSlider").slickGoTo($(this).attr("index"));
  });

  //=========== HEADER SCROLL FUNCTION STARTS

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $(".header-div").addClass("fixed-header");
      // $('.tphead').slideUp(100);
    } else {
      $(".header-div").removeClass("fixed-header");
      // $('.tphead').slideDown(100);
    }
  });
});

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
