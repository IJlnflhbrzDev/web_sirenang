$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items: 3,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// GALERY CAROUSEL OWL

	// Gallery Slider JS
	$('.gallery-slider-three').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
		],
		responsive:{
			0:{
				items: 1,
			},
			576:{
				items: 2,
			},
			768:{
				items: 2,
			},
			992:{
				items: 4,
			},
			1200:{
				items: 4,
			}
		}
	});