let arr = [3, 2, 1];

function products(acc, num, i, array) {
	console.log(`acc: ${acc}`);
	console.log(`num: ${num}`);
	console.log(`i: ${i}`);
	console.log(`arrayElem: ${arr[i]}`);

	return num !== array[i] ? (acc *= num) : acc;
}

newArr = arr.reduce(products, 1);
console.log(newArr);
