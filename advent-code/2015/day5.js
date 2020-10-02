const fs = require("fs"),

const getInput = function () {
	rawFile = fs.readFileSync(__dirname + "\\day5.txt", "utf8").split("\r\n");
	return rawFile;
};

//Rules for Part One
const checkVowels = function (str) {
	counter = 0;
	for (let c of str) {
		if (c.match(/[aeiou]/g)) counter += 1;
	}
	if (counter >= 3) return true;
};

const checkDoubles = function (str) {
	for (let i = 0; i <= str.length - 1; i++) {
		if (str[i] === str[i + 1]) return true;
	}
};

const checkDisallowed = function (str) {
	return str.match(/ab|cd|pq|xy/g) ? false : true;
};

const stringNice1 = function (str) {
	return checkVowels(str) && checkDoubles(str) && checkDisallowed(str)
		? true
		: false;
};

const countNiceStr1 = function (strings) {
	let niceStrings = strings.filter((str) => stringNice1(str));
	console.log(niceStrings.length);
};

//Rules for Part Two
const checkPairs = function (str) {
	for (let i = 0; i <= str.length - 2; i++) {
		if (str.slice(i + 2).includes(`${str[i]}${str[i + 1]}`)) return true;
	}
};

const checkLetterMiddle = function (str) {
	for (let i = 0; i <= str.length - 2; i++) {
		if (str[i] === str[i + 2] && str[i] !== str[i + 1]) return true;
	}
};

const stringNice2 = function (str) {
	return checkPairs(str) && checkLetterMiddle(str) ? true : false;
};

const countNiceStr2 = function (strings) {
	let niceStrings = strings.filter((str) => stringNice2(str));
	console.log(niceStrings.length);
};

//Result for Part One
countNiceStr1(getInput());

//Result for Part Two
countNiceStr2(getInput());
