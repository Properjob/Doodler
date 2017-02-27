(function(tau) {
	var page = document.getElementById("pageMenu"),
		selector = document.getElementById("selectorMenu"),
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
		if (id === "Color_Palette"){
			tau.changePage("pageColorPalette");
			return;
		}
		//
		if (target.classList.contains("ui-selector-indicator")) {
			//console.log("Indicator clicked");
			return;
		}
	}

	/**
	 * pagebeforeshow event handler
	 * Do preparatory works and adds event listeners
	 */
	page.addEventListener("pagebeforeshow", function() {
		clickBound = onClick.bind(null);
		selectorComponent = tau.widget.Selector(selector);
		selector.addEventListener("click", clickBound, false);
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