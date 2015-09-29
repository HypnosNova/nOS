function addTooltip(str) {
	var x = $("#" + str).offset().left;
	var wid2 = $("#" + str + "Text").outerWidth();
	var width = $("#" + str).outerWidth() * 1.22;
	$("#" + str + "Tip").css("width", wid2 + "px");
	$("#" + str + "Text").css("margin-left", (x + width) + "px").css("opacity", 1);
}

function closeTooltip(str) {
	var x = $("#" + str).offset().left;
	var wid2 = $("#" + str + "Text").outerWidth();
	var width = $("#" + str).outerWidth() * 1.25;
	$("#" + str + "Tip").css("width", "0px");
	$("#" + str + "Text").css("margin-left", (x + width + wid2) + "px").css("opacity", 0);
}