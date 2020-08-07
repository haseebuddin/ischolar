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
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: ".slider-wrap,.slider-x",
  });

  $(".slider-wrap").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    infinite: false,
    vertical: true,
    focusOnSelect: true,
    asNavFor: ".mobileWrapSlider,.slider-x",
  });
  $(".slider-wrap").on("click", ".slick-slide", function () {
    $(".mobileWrapSlider").slickGoTo($(this).attr("index"));
  });
  $(".slider-x").slick({
    asNavFor: ".slider-wrap,.mobileWrapSlider",
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    arrows: false,
  });
  $(".corefeatures").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $(".scrolltopTop").fadeIn(200);
      // $('.tphead').slideUp(100);
    } else {
      $(".scrolltopTop").fadeOut(200);
      // $('.tphead').slideDown(100);
    }
  });

  $(".scrolltopTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
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
