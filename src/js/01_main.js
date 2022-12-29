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
		fade: false,
		speed: 5000,
		autoplay: true
	})
	

	const getPagination = (currentSlide, countSlide) => {
		let html = ''
		for (let i = 0; i < countSlide; i++) {
			if(currentSlide == i) html = html + '<div class="arenda__pagination-item active"></div>'
				else html = html + '<div class="arenda__pagination-item"></div>'			
		}
		return html
	}

	$('.arenda__slider').on('init reInit', (event, slick, currentSlide, nextSlide) => {
		console.log(currentSlide);
		$('.arenda__pagination').html(getPagination(slick.slideCount-1, slick.slideCount))
	  })
	$('.arenda__slider').on(`beforeChange`, (event, slick, currentSlide, nextSlide) => {
		$('.arenda__pagination').html(getPagination(currentSlide, slick.slideCount))
	  })

	$('.arenda__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		fade: false,
		speed: 1800,
		autoplaySpeed: 6000,
		autoplay: true
	})

	$('.arenda .arr-next').click(() => {
		$('.arenda__slider').slick('slickNext')
	})
	$('.arenda .arr-prev').click(() => {
		$('.arenda__slider').slick('slickPrev')
	})
	
	

	


});