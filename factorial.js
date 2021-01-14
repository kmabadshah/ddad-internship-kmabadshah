function getFactorial(num) {
	return num > 0 ? num * getFactorial(num - 1) : 1
}

console.log(getFactorial(5)) // 120
console.log(getFactorial(9)) // 362880
