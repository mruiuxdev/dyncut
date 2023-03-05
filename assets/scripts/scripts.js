"use strict";

$(() => {
  $(window).on("scroll", function () {
    const scrollPosition = $(window).scrollTop();
    const navbar = $("nav.navbar");
    const navbarBrand = $(".navbar .navbar-brand img");

    if (scrollPosition > 100) {
      navbar.addClass("scrolled");
      navbarBrand.attr("src", "/assets/images/dyncut-scrolled.svg");
    } else {
      navbar.removeClass("scrolled");
      navbarBrand.attr("src", "/assets/images/dyncut.svg");
    }
  });

  const docSlider = $(".docs__slider");
  if (docSlider) {
    docSlider.slick({
      arrows: true,
      dots: false,
    });
  }

  const faqsTab = $('.faqs .btn[data-bs-toggle="pill"]');
  faqsTab.on("shown.bs.tab", () => {
    docSlider.slick("setPosition");
  });

  const testimonialsSlider = $(".testimonials__slider");
  if (testimonialsSlider) {
    testimonialsSlider.slick({
      arrows: false,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }

  const videosSlider = $(".videos__slider");
  if (videosSlider) {
    videosSlider.slick({
      arrows: true,
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
			arrows: false,
			dots: true
          },
        },
      ],
    });
  }
});
