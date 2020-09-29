const fs = require("fs");

function getInput() {
	rawFile = fs.readFileSync(__dirname + "\\day3.txt", "utf8").split("\r\n");
	return rawFile[0].split("");
}

let trackPositions = function (directions) {
	let positions = [];
	positions["0,0"] = 1;
	let x = 0;
	let y = 0;

	for (let dir in directions) {
		switch (directions[dir]) {
			case "^":
				y += 1;
				break;
			case "v":
				y -= 1;
				break;
			case ">":
				x += 1;
				break;
			case "<":
				x -= 1;
				break;
		}
		let currentPosition = `${x},${y}`;
		if (currentPosition in positions) {
			positions[currentPosition] += 1;
		} else {
			positions[currentPosition] = 1;
		}
	}
	return positions;
};

let santaWithRobotPositions = function (directions) {
	santaDirections = [];
	robotDirections = [];
	directions.forEach((direction, i) => {
		i % 2 == 0
			? santaDirections.push(direction)
			: robotDirections.push(direction);
	});
	let santaPositions = trackPositions(santaDirections);
	let robotPositions = trackPositions(robotDirections);
	return { ...santaPositions, ...robotPositions };
};

let directions = getInput();
housesWithGiftsPart1 = Object.keys(trackPositions(directions));
console.log(housesWithGiftsPart1.length);

housesWithGiftsPart2 = Object.keys(santaWithRobotPositions(directions));
console.log(housesWithGiftsPart2.length);
