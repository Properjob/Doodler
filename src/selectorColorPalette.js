(function(tau) {
	var page = document.getElementById("pageColorPalette"),
		selector = document.getElementById("selectorColorPalette"),
		selectorComponent,
		clickBound;

	/**
	 * click event handler for the selector
	 */
	function onClick(event) {
		var target = event.target,
		activeItem = selector.querySelector(".ui-item-active"),
		id = activeItem.getAttribute("id");
		//
		if (target.classList.contains("ui-selector-indicator")) {
			//console.log("Indicator clicked");
			return;
		}
		//
		brushColor = id;
		tau.changePage("main");
	}

	/**
	 * pagebeforeshow event handler
	 * Do preparatory works and adds event listeners
	 */
	page.addEventListener("pagebeforeshow", function() {
		clickBound = onClick.bind(null);
		selectorComponent = tau.widget.Selector(selector);
		selector.addEventListener("click", clickBound, false);
		console.log("tyest");
	});

	/**
	 * pagebeforehide event handler
	 * Destroys and removes event listeners
	 */
	page.addEventListener("pagebeforehide", function() {
		selector.removeEventListener("click", clickBound, false);
		selectorComponent.destroy();
	});
}(window.tau));