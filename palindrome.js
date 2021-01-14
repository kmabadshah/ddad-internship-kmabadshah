function getPalindrome(word) {
	word = word.toLowerCase()
	// get the reverse string
	const reverse = word.split('').reverse().join('')

	if (reverse !== word) return 'Not a Palindrome'

	if (reverse.length % 2 === 0) return 'Even Palindrome'
	return 'Odd Palindrome'
}

console.log(getPalindrome('ababa')) // Odd Palindrome
console.log(getPalindrome('sfe3443efs')) // Even Palindrome
console.log(getPalindrome('ssee2344s')) // Not a Palindrome

