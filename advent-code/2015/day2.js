const fs = require("fs");

rawFile = fs.readFileSync(__dirname + "\\day2.txt", "utf8").split("\r\n");
dimensions = rawFile.map((el) => {
	return el.split("x");
});

function calculatePaper(array) {
	totalPaper = 0;
	array.forEach((el) => {
		let paper = [];
		let l = parseInt(el[0]);
		let w = parseInt(el[1]);
		let h = parseInt(el[2]);
		paper.push(2 * l * w, 2 * w * h, 2 * l * h, Math.min(l * w, w * h, h * l));
		totalPaper += paper.reduce((a, b) => a + b);
	});
	console.log(totalPaper);
}

calculatePaper(dimensions);
