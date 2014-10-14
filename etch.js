$(document).ready(function() {
	createGrid(16);
});

function colorEffects () {
	$(".inner").hover(function() {
		$(this).addClass("hover");
	},
	function() {
		//$(this).removeClass("hover");
	});
}

function createGrid(gridSize) {
	var pDim = 960 / gridSize;

	for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
		$(".wrapper").append("<div class='inner'></div>");
		};
	$(".wrapper").append("<div class='break'></div>");
	};

	$(".inner").css("width", pDim);
	$(".inner").css("height", pDim);
	colorEffects();
};

function prompGrid() {
	var gridSize = prompt("Please enter new grid size. (eg. 32 = 32x32) max.128", "16");
	if (gridSize > 128) {
		gridSize = 128;
	};
	$(".inner").remove();
	$(".break").remove();
	createGrid(gridSize);

}

function squStyle() {
	$(".inner").css("border-radius", "");
}

function cirStyle() {
	$(".inner").css("border-radius", "50%");
}
