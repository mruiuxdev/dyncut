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
});
