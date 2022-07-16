/*  198. House Robber */

function rob(num) {
	// Are there Houses?
	if (num === null || num === 0) return 0;
	// Are there just one house?
	if (num.length === 1) return num[0];
	// If theres more than one house
	let runningTotal = [];
	// First element equals first house value
	runningTotal[0] = num[0];
	// Second Element equals max between first two houses
	runningTotal[1] = Math.max(num[0], num[1]);

	// Loop thru rest of houses
	for (let i = 2; i < num.length; i++) {
		// Max as of one house ago
		runningTotal[i] = Math.max(
			runningTotal[i - 1],
			// Max as of two houses ago
			runningTotal[i - 2] + num[i]
		);
	}
	return runningTotal[runningTotal.length - 1];
}

//

/* 121. Best Time to Buy and Sell Stock */

function maxProfit(prices) {
	let buy = prices[0];
	let profit = 0;
	prices[0] = 0;

	for (let i = 1; i < prices.length; i++) {
		if (buy > prices[i]) {
			buy = prices[i];
			prices[i] = 0;
		} else {
			profit = Math.max(prices[i] - buy, profit);
		}
	}
	return profit;
}

var maxProfits = function (prices) {
	let maxProf = 0;
	let curr = prices[0];

	for (let price of prices) {
		if (curr < price) maxProf = Math.max(maxProf, price - curr);
		else curr = price;
	}
	return maxProf;
};

function maxProfit(prices, max = 0, min = Infinity) {
	prices.forEach((price) => (price < min ? (min = price) : (max = Math.max(max, price - min))));
	return max;
}

/* 70. Climbing Stairs */

function climbStairs(n) {
	function countingFunc(stairsRemaining, savedResults) {
		if (stairsRemaining < 0) return 0;
		if (stairsRemaining === 0) return 1;
		// Have we seen this num of stairs before/is savedResults empty?
		if (savedResults[stairsRemaining]) {
			return savedResults[stairsRemaining];
		}

		savedResults[stairsRemaining] =
			countingFunc(stairsRemaining - 1, savedResults) +
			countingFunc(stairsRemaining - 2, savedResults);

		return savedResults[stairsRemaining];
	}
	// First iterations; pass num of stairs remaining(n) and savedResults map
	return countingFunc(n, {});
}

/* 746. Min Cost Climbing Stairs */

function minCostClimbingStairs(cost) {
	let first = cost[0];
	let second = cost[1];

	for (let i = 2; i < cost.length; i++) {
		let current = cost[i] + Math.min(first, second);
		first = second;
		second = current;
	}
	return Math.min(first, second);
}

/* 199. Binary Tree Right Side View */

function rightSideView(root) {
	if (!root) return [];

	const queue = [root];
	const result = [];

	while (queue.length) {
		let len = queue.length;
		result.push(queue[queue.length - 1].val);

		while (len--) {
			let node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}
	return result;
}

function rightSideView(root) {
	let res = [];

	function traverse(node, depth) {
		if (!node) return;
		if (!res[depth]) res[depth] = node.val;
		traverse(node.right, depth + 1);
		traverse(node.left, depth + 1);
	}
	traverse(root, 0);
	return res;
}

/* 217. Contains Duplicate */

function containsDuplicate(num) {
	num.sort((a, b) => b - a);
	for (let i = 0; i < num.length; i++) {
		if (i > 0 && num[i - 1] === num[i]) {
			return true;
		}
	}
	return false;
}

function containsDuplicate(num) {
	return new Set(num).size !== num.length;
}
