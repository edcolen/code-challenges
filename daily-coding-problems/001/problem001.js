function solution(list, k) {
    let counter = 0;
    list.forEach((num) => {
        if (list.includes(k - num)) {
            counter++;
        }
    });
    return counter != 0 ? true : false;
}