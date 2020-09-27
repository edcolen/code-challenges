const fs = require("fs");

rawFile = fs.readFileSync(__dirname + "\\day1.txt", "utf8").split("\r\n");
let instructions = rawFile[0].split("");

let counter = 0;
let basementHit = [];
instructions.forEach((c, i) => {
	c === "(" ? counter++ : counter--;
	if (counter === -1) basementHit.push(i);
});

console.log(counter);
console.log(basementHit[0] + 1);
