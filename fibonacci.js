function getFibonacci(num) {
	const finalArr = []

	for (let i=0; i<num; i++) {
		// nothing fancy until the array has at least 2 items
		if (finalArr.length < 2) { finalArr.push(i); continue; }

		const lastItem1 = finalArr[finalArr.length - 1]
		const lastItem2 = finalArr[finalArr.length - 2]

		finalArr.push(lastItem1 + lastItem2)
	}

	return finalArr
}

console.log(getFibonacci(4)) // [0, 1, 1, 2]
console.log(getFibonacci(8)) // [0, 1, 1, 2, 3, 5, 8, 13]
