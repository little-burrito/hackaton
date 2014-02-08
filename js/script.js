console.log('load');
$(document).ready(function() {
	
	var out = true;
	$(document).ready(function() {
		console.log('ready');
		$('.sidebar').click(function() {
			console.log('slide');
			$(this).animate({"margin-left": '0'});
			$('#close span').click(function() {
				event.stopPropagation();
				$('.sidebar').animate({"margin-left": '-16%'});
			});

			/*if (out == true) {
				$(this).animate({"margin-left": '0'});
				out = false;
			} else {
				$(this).animate({"margin-left": '-16%'});
				out = true;
			}*/
		});
	});

});