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

function Light(posX, posY) {
	this.posX = posX;
	this.posY = posY;
	this.isOn = false;
	this.name = `lamp(${posX},${posY})`;

	this.turnOn = function () {
		this.isOn = true;
	};

	this.turnOff = function () {
		this.isOn = false;
	};

	this.toggle = function () {
		this.isOn === false ? this.turnOn() : this.turnOff();
	};
}

function createLightGrid() {
	let lightGrid = [];
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			lightGrid.push(new Light(i, j));
			console.log(`created ${lightGrid.slice(-1)[0].name}`);
		}
	}
	return lightGrid;
}
