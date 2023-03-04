"use strict";

$(() => {
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
			slidesToPreview: 1,
			autoplay: true,
		});
	}

	const videosSlider = $(".videos__slider");
	if (videosSlider) {
		videosSlider.slick({
			arrows: true,
			dots: false,
			slidesToShow: 2,
			slidesToPreview: 2,
			autoplay: true,
		});
	}
});
