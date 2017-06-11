//Анимация полета в корзину

$(document).ready(function() {
	$('.js-add-to-basket').on('click', function(e) {
		e.preventDefault();

		var o1 = $(this).offset();
		var o2 = $('#basket').offset();
		var dx = o1.left - o2.left;
		var dy = o1.top - o2.top;
		var distance = Math.sqrt(dx * dx + dy * dy);

		$(this).closest('.card').find('.card__preview img').effect("transfer", { to: $("#basket"), className: "transfer_class" }, distance);	
		$('.transfer_class').html($(this).closest('.card').find('.card__preview').html());
		$('.transfer_class').find('img').css('height', '100%');
		// return false;
	});
});

//END Анимация полета в корзину