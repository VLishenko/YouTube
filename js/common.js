$(document).ready(function() {
	$('.slider-wrap').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  // autoplay: true,
	  // autoplaySpeed: 2000,
	  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
  ]
	});
});