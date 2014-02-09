$(document).ready(function(){
	var height = $(window).height();
	var navHeight = $('#navbar').outerHeight();
	var swipeHeight = height-navHeight+'px';
	console.log('swipeHeight: '+swipeHeight);
	$('#swipable').css('top', swipeHeight);

	var swipable = document.getElementById('swipable');
	$(swipable).click(function() {
		console.log('click');
		$('#swipable').animate({top:0});
		Hammer(swipable).on('swipedown', function() {
			console.log('swipe');
			$('#swipable').animate({'top': swipeHeight});
		});
	});
});