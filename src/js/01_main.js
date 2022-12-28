$(document).ready(function () {

    $('.menu-burger').click(function(event) {
		$(this).toggleClass('open-menu');
		$('.topnav-mobile').toggleClass('responsive');
	});

	const zero = (val, inc) => {
		let value
		if(inc) value = val + 1
			else value = val
		if (value < 10) return '0' + value
			else value
	}

	$('.main-slider__slider').on('init reInit', (event, slick, currentSlide, nextSlide) => {
		$('.main-slider__numbers').html(zero(0, true) + '/<span>' + zero(slick.slideCount, false) + '</span>')
	  })
	$('.main-slider__slider').on(`afterChange`, (event, slick, currentSlide, nextSlide) => {
		$('.main-slider__numbers').html(zero(currentSlide, true) + '/<span>' + zero(slick.slideCount, false) + '</span>');
	  })

	$('.main-slider__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade: true,
		speed: 5000,
		autoplay: true
	})
	

	$('.arenda__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		// fade: true,
		speed: 5000,
		// autoplay: true
	})
	
	

	


});