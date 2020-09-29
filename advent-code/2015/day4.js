const fs = require("fs"),
	md5 = require("md5");

function getInput() {
	rawFile = fs.readFileSync(__dirname + "\\day4.txt", "utf8").split("\r\n");
	return rawFile[0];
}

function findFiveZeros(secretKey) {
	num = 0;
	hash = md5(`${secretKey + num}`);
	while (hash.slice(0, 5) !== "00000") {
		num++;
		hash = md5(`${secretKey + num}`);
		console.log(num);
	}
	console.log(
		`The number ${num} produced the hash ${hash} that started with 00000`
	);
}

function findSixZeros(secretKey) {
	num = 0;
	hash = md5(`${secretKey + num}`);
	while (hash.slice(0, 6) !== "000000") {
		num++;
		hash = md5(`${secretKey + num}`);
	}
	console.log(
		`The number ${num} produced the hash ${hash} that started with 000000`
	);
}

let secretKey = getInput();
findFiveZeros(secretKey);
findSixZeros(secretKey);
