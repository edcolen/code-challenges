// Program required by the challenge
function fizzBuzz() {
	for (i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log("FizzBuzz");
		} else if (i % 3 == 0) {
			console.log("Fizz");
		} else if (i % 5 == 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}

// A more flexible FizzBuzz program that accept different numbers from 3 or 5
function flexFizzBuzz(num1, num2) {
	for (i = 1; i <= 100; i++) {
		if (i % num1 == 0 && i % num2 == 0) {
			console.log("FizzBuzz");
		} else if (i % num1 == 0) {
			console.log("Fizz");
		} else if (i % num2 == 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}