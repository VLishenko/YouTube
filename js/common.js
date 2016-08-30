$(document).ready(function() {
  
  //Language menu
  $(document).mouseup(function (e){
      var div = $(".languale-list");
      var div2 = $("#language_btn");
      
      if (
          !div.is(e.target)
          && !div2.is(e.target)
          && div.has(e.target).length === 0
          && div2.has(e.target).length === 0)
          { 
          div.addClass("hidden");
      }
      else {
         div.removeClass("hidden");
      }
    });


	//Slider
  $('.slider-wrap').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
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

  //Pop-up Validation
  $(".slider-item a").magnificPopup({type:"inline", midClick: true});

  //Pop-up terms
  $(".footer-terms a").magnificPopup({type:"inline", midClick: true});


});