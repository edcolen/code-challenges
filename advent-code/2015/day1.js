const fs = require("fs");

function getInput() {
	rawFile = fs.readFileSync(__dirname + "\\day1.txt", "utf8").split("\r\n");
	return rawFile[0].split("");
}

function followElevatorInstructions() {
	let counter = 0;
	let basementHit = [];
	let instructions = getInput();
	instructions.forEach((c, i) => {
		c === "(" ? counter++ : counter--;
		if (counter === -1) basementHit.push(i);
	});

	console.log(counter);
	console.log(basementHit[0] + 1);
}

followElevatorInstructions();
