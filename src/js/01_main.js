$(document).ready(function () {

    $('.menu-burger').click(function(event) {
		$(this).toggleClass('open-menu');
		$('.topnav-mobile').toggleClass('responsive');
	});


});