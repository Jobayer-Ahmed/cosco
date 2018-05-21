$(document).ready(function() {
	// select option function
	$(".select_without_icon").click(function(event) {
		$(".list").toggleClass('hide');
		if($( ".select_without_icon" ).hasClass("select_icon_down")) {
			$( ".select_without_icon" ).removeClass("select_icon_down");
		} else {
			$( ".select_without_icon" ).addClass("select_icon_down");
		}
	});
	$(".option").click(function() {
		$('.option').css('color', '#000');
		$(this).css('color', '#4AE1CE');
		let x = $(this).text();
		$(".current_value").text(x);
	});
});