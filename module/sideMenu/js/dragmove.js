
function add2() {
	function Pointer(x, y) {
		this.x = x;
		this.y = y;
	}

	function Position(left, top) {
		this.left = left;
		this.top = top;
	}
	$(".item_content .item").each(function(i) {
		this.init = function() { // 初始化
			this.box = $(this).parent();
			$(this).attr("index", i).css({
				position: "absolute",
				left: 25+100*(i%2),
				top: 110+100*Math.floor(i/2)
			}).appendTo(".item_content");
				//this.drag2();
		}
	});
	this.init();
}