function products(acc, num, i, array) {
	return acc.concat(array.filter((el) => el !== num).reduce((a, c) => a * c, 1));
}

function solution(arr) {
	return arr.reduce(products, []);
}

console.log(solution([1, 2, 3, 4, 5]));
