const fs = require("fs");

rawFile = fs.readFileSync(__dirname + "\\day2.txt", "utf8").split("\r\n");
dimensions = rawFile.map((el) => {
	return el.split("x");
});

function calculatePaper(presentDimensions) {
	let paper = [];
	let l = parseInt(presentDimensions[0]);
	let w = parseInt(presentDimensions[1]);
	let h = parseInt(presentDimensions[2]);
	paper.push(2 * l * w, 2 * w * h, 2 * l * h, Math.min(l * w, w * h, h * l));
	totalPaper += paper.reduce((a, b) => a + b);
}

function calculateRibbon(presentDimensions) {
	let l = parseInt(presentDimensions[0]);
	let w = parseInt(presentDimensions[1]);
	let h = parseInt(presentDimensions[2]);
	let ribbon = [l, w, h].sort((a, b) => a - b);
	totalRibbon += 2 * ribbon[0] + 2 * ribbon[1] + ribbon.reduce((a, b) => a * b);
}

function solution(array) {
	totalPaper = 0;
	totalRibbon = 0;
	array.forEach((el) => {
		calculatePaper(el);
		calculateRibbon(el);
	});
	console.log(totalPaper);
	console.log(totalRibbon);
}

solution(dimensions);
