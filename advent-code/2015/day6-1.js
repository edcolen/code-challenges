const fs = require("fs");

const getInput = function () {
	rawFile = fs.readFileSync(__dirname + "\\day6.txt", "utf8").split("\r\n");
	return rawFile;
};

function getInstructions(rawFile) {
	let instructions = [];
	rawFile.forEach((el) => {
		let command = el.match(/([a-z]\D+)/g)[0].trim();
		let coords = el.match(/\d+/g);
		let startX = parseInt(coords[0]);
		let startY = parseInt(coords[1]);
		let endX = parseInt(coords[2]);
		let endY = parseInt(coords[3]);
		instructions.push([command, startX, startY, endX, endY]);
	});
	return instructions;
}

let lightGrid = new Uint8Array(1000 * 1000);

function followInstructions(instructions) {
	instructions.forEach((instruction, i) => {
		for (let i = instruction[1]; i <= instruction[3]; i++) {
			for (let j = instruction[2]; j <= instruction[4]; j++) {
				let index = 1000 * i + j;
				if (instruction[0] === "turn on") lightGrid[index] = 1;
				if (instruction[0] === "turn off") lightGrid[index] = 0;
				if (instruction[0] === "toggle")
					lightGrid[index] = lightGrid[index] === 0 ? 1 : 0;
			}
		}
	});
}

let instructions = getInstructions(getInput());
followInstructions(instructions);

let lightsLit = lightGrid.reduce(
	(total, light) => (light === 0 ? total : ++total),
	0
);

console.log(lightsLit);
