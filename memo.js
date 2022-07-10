// Cache
function addTo80(n) {
	return n + 80;
}

function memoizedAddTo80() {
	let cache = {};
	return function (n) {
		n in cache ? cache[n] : (cache[n] = n + 80);
		return cache[n];
	};
}

const memo = memoizedAddTo80();

/* function fib(n) {
	if (n < 2) {
		return n;
	} else {
		return fib(n - 1) + fib(n - 2);
	}
}
 */

function fibonacciMaster() {
	let cache = {};
	return function helper(n) {
		if (n in cache) {
			return cache[n];
		} else {
			if (n < 2) {
				return n;
			} else {
				cache[n] = helper(n - 1) + helper(n - 2);
				return cache[n];
			}
		}
	};
}

const fib = fibonacciMaster();
