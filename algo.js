let counter = 0;

function inception() {
	console.log(counter);
	if (counter > 3) {
		return 'done';
	}
	counter++;
	return inception();
}

function findFactorialRecursive(number) {
	if (number === 2) return 2;
	return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
	let answer = 1;
	if (number === 2) answer = 2;

	for (let i = 2; i <= number; i++) {
		answer = answer * i;
	}
	return answer;
}

function fib(n) {
	let arr = [0, 1];
	for (let i = 2; i < n + 1; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}
	return arr[n];
}

function fibonacciRecursive(n) {
	if (n < 2) {
		return n;
	}
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/* const reverseString = (str) => {
	if (str.length === 0) return '';
	let temp = [''];

	temp.push(reverseString(str.slice(1)));
	return new Array(temp);
}; */

const reverseStrings = function (str, left = 0, right = str.length - 1) {
	if (left < right) {
		let temp = str[left];
		str[left] = str[right];
		str[right] = temp;
		reverseStrings(str, left + 1, right - 1);
	}
};

// function reverseString(str, left = 0, right = str.length - 1) {
// 	while (left < right) {
// 		let hold = s[left];
// 		s[left] = s[right];
// 		s[right] = hold;
// 		left++;
// 		right--;
// 	}
// }
