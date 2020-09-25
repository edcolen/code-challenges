function solution(list, k) {
	let counter = 0;
	list.forEach((num) => {
		if (list.includes(k - num)) {
			counter++;
		}
	});
	return counter != 0 ? true : false;
}

console.log(solution([10, 15, 3, 7], 17));
