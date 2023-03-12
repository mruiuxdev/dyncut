"use strict";

$(() => {
  $(window).on("load", function () {
    const loader = $("#loader");
    if (loader) {
      $("body").css("overflow-y", "hidden");
      loader.fadeOut("slow", function () {
        $("body").css("overflow-y", "auto");
      });
    }
  });

  const forms = document.querySelectorAll(".needs-validation");

  if (forms) {
    Array.from(forms).forEach((form) => {
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;

      form.querySelectorAll("input, textarea").forEach((field) => {
        field.addEventListener("input", () => {
          if (field.checkValidity()) {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");

            const allFieldsValid = Array.from(form.elements).every((el) =>
              el.checkValidity()
            );
            submitBtn.disabled = !allFieldsValid;
          } else {
            field.classList.remove("is-valid");
            field.classList.add("is-invalid");
            submitBtn.disabled = true;
          }
        });
      });

      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }

  const navbar = $("nav.navbar");
  const navbarBrand = $(".navbar .navbar-brand img");
  $(window).on("scroll", function () {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition > 100) {
      navbar.addClass("scrolled");
      navbarBrand.attr("src", "/assets/images/dyncut-scrolled.svg");
    } else {
      navbar.removeClass("scrolled");
      navbarBrand.attr("src", "/assets/images/dyncut.svg");
    }
  });

  const btnToggle = $(".navbar .navbar-toggler");
  if (btnToggle) {
    btnToggle.on("click", function () {
      if (btnToggle.attr("aria-expanded") === "true") {
        $("body").css("overflow-y", "hidden");
      } else {
        $("body").css("overflow-y", "auto");
      }
    });
  }

  const navbarCollapse = $(".navbar .navbar-collapse");
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".navbar,.navbar .navbar-toggler").length) {
      navbarCollapse.removeClass("collapse show");
      btnToggle.attr("aria-expanded", "false");
      $("body").css("overflow-y", "auto");
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
            dots: true,
          },
        },
      ],
    });
  }

  const documentationNav = $(".documentation__nav");

  if (documentationNav) {
    $(".documentation__nav .documentation__item .icon__arrow").on(
      "click",
      function () {
        $(this).toggleClass("active");

        $(this).parent().next().slideToggle();
      }
    );
  }

  const sidebar = $(".sidebar");
  if (sidebar) {
    sidebar.theiaStickySidebar({
      additionalMarginTop: 100,
    });
  }
});
