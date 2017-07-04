// $('.js-open-form').magnificPopup({
//   type:'inline',
//   midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
// });

var reviewsModule = (function() {
	var reviews = {
		"blocks": [
			// "$popup": $('.js-open-form')
		]
	}

	var popup = {
		"trigger": $('.js-open-form'),
		"inputs": document.querySelectorAll(".reviews__form .form__item"),
		"submit": document.querySelector(".reviews__form .form__submit"),
		// "isValid": function() {
		// 	// for (var i = 0; i < this.inputs.length; i =+) {

		// 	// }
		// }
	}

	popup.setPopup = (function() {
		popup.trigger.magnificPopup({
		  type:'inline',
		  midClick: true
		});
	}());

	// popup.setValidate = (function() {
	// 	// popup.submit.setAttribute("disabled", "");


	// }());
}()); 