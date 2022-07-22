/* 1.Two Sum */
const twoSum = (arr, target) => {
	/*
  go through the array
  get the sum of the first two numbers
  if they === target return
  if not, increase index of second pointer
  if second pointer gets to the end of the arr without = target, 
  increase the first pointer by 1 and initialize the second pointer to be 1 above that
  repeat until target is found
  if target is never found return null
  */
	let pointer1 = 0; // initialize pointers
	let pointer2 = pointer1 + 1;
	let sum = arr[pointer1] + arr[pointer2]; // get the sum of first two
	let answer = null; // set null at first in case target is never met, otherwise change it

	// if the first two values don't then we increase pointer 2 till the end
	while (true) {
		sum = arr[pointer1] + arr[pointer2];
		if (sum === target) {
			// if the new sum = target we record the indices as the answer and break from loop
			answer = [pointer1, pointer2];
			break;
		}
		pointer2++;
		if (pointer2 >= arr.length) {
			// if pointer 2 gets to the end without finding the answer we increment pointer 1 and reinitalize
			pointer1++;
			pointer2 = pointer1 + 1;
		}
		if (pointer1 >= arr.length) break; // if pointer 1 gets to the end of the arr that means we never found the answer so we just break from loop and return null
	}
	return answer;
};

/* 15. Three Sum */

function threeSums(arr) {
	arr.sort((a, b) => a - b);
	const sumArr = [];

	for (let i = 0; i < arr.length; i++) {
		let targetSum = -arr[i];
		if (i > 0 && arr[i] === arr[i - 1]) {
			continue;
		}
		searchPair(arr, targetSum, i + 1, sumArr);
	}
	return sumArr;
}

function searchPairs(arr, targetSum, leftPointer, sumArr) {
	let rightPointer = arr.length - 1;
	while (leftPointer < rightPointer) {
		const currSum = arr[leftPointer] + arr[rightPointer];
		if (currSum === targetSum) {
			sumArr.push([-targetSum, arr[leftPointer], arr[rightPointer]]);
			console.log([-targetSum, arr[leftPointer], arr[rightPointer]]);
			leftPointer++;
			rightPointer--;
			while (leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer - 1]) {
				leftPointer++;
			}
			while (leftPointer < rightPointer && arr[rightPointer] === arr[rightPointer + 1]) {
				rightPointer--;
			}
		}
		if (targetSum > currSum) leftPointer++;
		if (targetSum < currSum) rightPointer--;
	}
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([-5, 2, -1, -2, 3]));

function threeSum(arr) {
	let [solution, left, right] = [[], 0, arr.length - 1];

	if (arr.length < 3) return solution;
	// Sort Array
	arr.sort((a, b) => a - b); // [-4,-1,-1,0,1,2]

	for (let [index, target] of arr.entries) {
		if (target > 0) return solution;
		if (target === arr[index - 1]) continue;
		//target -1
		leftPointer = index + 1; // -1
		rightPointer = arr.length - 1; //2
		let temp = 0;

		while (leftPointer < rightPointer) {
			temp = target + arr[leftPointer] + arr[rightPointer];

			if (temp === 0) {
				solution.push([target], arr[leftPointer], arr[rightPointer]);
				leftPointer++;
				rightPointer--;

				while (leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer - 1]) {
					leftPointer++;
				}
				while (leftPointer < rightPointer && arr[rightPointer] === arr[rightPointer + 1]) {
					rightPointer--;
				}
			} else if (temp > 0) {
				rightPointer++;
			} else if (temp < 0) {
				leftPointer++;
			}
		}
	}
	return solution;
}

function threeSome(arr) {
	let [solution, left, right] = [[], 0, arr.length - 1];

	if (arr.length < 3) {
		//If there are less than three values, return empty array. Edge case.
		return solution;
	}
	arr.sort((a, b) => {
		return a - b;
	}); //lowest to highest number

	for (let [index, number] of arr.entries()) {
		if (number > 0) {
			//can't add positive numbers to have a negative number
			return solution;
		}
		if (number === arr[index - 1]) {
			//continue because duplicate allowed but triplets aren't
			continue;
		}
		//current number example -4

		left = index + 1; //-1
		right = arr.length - 1; //2
		let temp = 0; //used to make sure the two numbers equal 0

		while (left < right) {
			temp = number + arr[left] + arr[right];
			if (temp === 0) {
				solution.push([number, arr[left], arr[right]]);
				left++; //increment and decrement because we want to account for the values used
				right--;

				//The while statements check for duplicates. If present we move.
				while (left < right && arr[left] === arr[left - 1]) {
					left++;
				}
				while (left < right && arr[right] === arr[right + 1]) {
					right--;
				}
			} else if (temp > 0) {
				right--;
			} else if (temp < 0) {
				left++;
			}
		}
	}
	return solution;
}

function treeSum(array) {
	array.sort((a, b) => a - b);
	const result = [];

	for (let i = 0; i < array.length; i++) {
		if (i > 0 && array[i] === array[i - 1]) continue;
		const target = -array[i];
		let left = i + 1;
		let right = array.length - 1;

		while (right > left) {
			const sum = array[left] + array[right];
			if (sum > target) {
				right--;
			} else if (sum < target) {
				left++;
			} else {
				result.push([array[i], array[left], array[right]]);
				while (array[left] === array[left + 1]) left++;
				while (array[right] === array[right - 1]) right--;
				left++;
				right--;
			}
		}
	}
	return result;

	//* Case 1. sum > target
	// *-Eliminate last element, right pointer moves left
	//* Case 2. sum < target
	// *-Eliminate first element, left pointer moves right
	//* Case 3. sum = target
	//* Done!
}

/* 581. Shortest Unsorted Continuous Subarray */

//* Initialize leftPointer at start of array and rightPointer at end
//* Walk the leftPointer forward until you get to an element thats less than its prev
//* Walk rightPointer backwards until you get an element that is greater than its prev
//* Find the min and max of this sub array
//* Extend the subarray from the beginning to include any num greater than the min of subarray
//* Extend the subarray from the end to include any number less than the max of the subarray

function findUnsortedSubarray(arr) {
	let leftPointer = 0;
	let rightPointer = arr.length - 1;

	// Increment leftPointer until we get to an element thats greater than its next element
	while (arr[leftPointer] <= arr[leftPointer + 1] && leftPointer < arr.length - 1) leftPointer++;

	// Denotes that the whole array is already sorted
	if (leftPointer === arr.length - 1) return 0;

	// Decrement rightPointer until we get to an element thats less than its next element
	while (arr[rightPointer] >= arr[rightPointer - 1] && rightPointer > -1) rightPointer--;

	const subArr = arr.slice(leftPointer, rightPointer + 1);
	const subArrMin = Math.min(...subArr);
	const subArrMax = Math.max(...subArr);

	// Extend window to the left, to include elements that are greater than the SubArrMax
	while (arr[leftPointer - 1] > subArrMin && leftPointer > 0) leftPointer--;

	// Extend window to the right to include elements that are less that subArrMin
	while (arr[rightPointer + 1] < subArrMax && rightPointer < arr.length - 1) rightPointer++;

	const output = rightPointer - leftPointer + 1;
	return output > 1 ? output : 0;
}

function mergeTwoLists(l1, l2) {
	let dummy = new NodeList(-1);
	let head = dummy;

	while (l1 !== null && l2 !== null) {
		if (l1.val <= l2.val) {
			dummy.next = l1;
			l1 = l1.next;
		} else {
			dummy.next = l2;
			l2 = l2.next;
		}
		dummy = dummy.next;
	}
	if (l1 !== null) {
		dummy.next = l1;
	} else {
		dummy.next = l2;
	}
	return head.next;
}

/* 977. Squares of a Sorted Array */

function sortedSquares(arr) {
	const result = new Array(arr.length).fill(0);
	let leftPointer = 0;
	let rightPointer = arr.length - 1;
	let resultIndex = arr.length - 1;

	while (leftPointer <= rightPointer) {
		let leftVal = Math.pow(arr[leftPointer], 2);
		let rightVal = Math.pow(arr[rightPointer], 2);

		if (leftVal < rightVal) {
			result[resultIndex] = rightVal;
			rightPointer--;
		} else {
			result[resultIndex] = leftVal;
			leftPointer++;
		}
		resultIndex--;
	}
	return result;
}

function sorted(arr) {
	const results = [];
	let left = 0;
	let right = arr.length - 1;
	let position = arr.length - 1;

	while (left <= right) {
		if (arr[left] ** 2 > arr[right] ** 2) {
			results[position] = arr[left] ** 2;
			position--;
			left++;
		} else {
			results[position] = arr[right] ** 2;
			position--;
			right--;
		}
	}
	return results;
}

/* 844. Backspace String Compare */

function backspaceCompare(s, t) {
	s = parse(s);
	t = parse(t);
	return s === t;

	function parse(string) {
		let count = 0;
		let stack = [];
		while (count < string.length) {
			if (string[count] === '#') {
				stack.pop();
			} else {
				stack.push(string[count]);
			}
			count++;
		}
		return stack.join('');
	}
}

function backspaceCompare2(s, t) {
	function parse(string) {
		const result = [];
		for (let char of string) {
			if (char === '#') {
				result.pop();
			} else {
				result.push(char);
			}
		}
		return result.join();
	}

	return parse(s) === parse(t);
}

/* 287. Find the Duplicate Number */

function findDuplicate(arr) {
	let fastPointer = 0;
	let slowPointer = 0;

	while (true) {
		fastPointer = arr[arr[fastPointer]];
		slowPointer = arr[slowPointer];

		if (fastPointer === slowPointer) {
			let pointer = 0;
			while (pointer !== slowPointer) {
				pointer = arr[pointer];
				slowPointer = arr[slowPointer];
			}
			return pointer;
		}
	}
}

/* 16. 3Sum Closest */

function threeSumClosest(array, target) {
	array.sort((a, b) => a - b);
	let result = array[0] + array[1] + array[2];

	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1;
		let right = array.length - 1;

		while (right > left) {
			const sum = array[i] + array[left] + array[right];

			sum > target ? right-- : left++;

			if (Math.abs(target - sum) < Math.abs(target - result)) {
				result = sum;
			}
		}
	}
	return result;
}

/* 713. Subarray Product Less Than K */

function numSubarrayProductLessThanK(arr, k) {
	if (k <= 1) return 0;

	let target = 1;
	let result = 0;

	let leftPointer = 0;
	let rightPointer = 0;

	while (rightPointer < arr.length) {
		target * arr[rightPointer];
		while (target >= k) {
			target /= arr[leftPointer];
			leftPointer++;
		}
		result += rightPointer - leftPointer + 1;
		rightPointer++;
	}
	return result;
}

/* 75. Sort Colors */

// [2,0,2,1,1,0]

function sortColors(arr) {
	let left = 0;
	let right = arr.length - 1;

	for (let i = 0; i <= right; i++) {
		if (arr[i] === 0) {
			// If array at pos i is is equal to 0; swap array at i with array at left; move left pointer up
			[arr[i], arr[left]] = [arr[left], arr[i]];
			left++;
		} else if (arr[i] == 2) {
			// If array at pos i is is equal to 2; swap array at i with array at right; move right pointer and index down
			[arr[i], arr[right]] = [arr[right], arr[i]];
			right--;
			i--;
		}
	}
}

/* 11. Container With Most Water */

function maxArea(height) {
	let area = 0,
		left = 0,
		right = height.length - 1;

	while (left < right) {
		const temp = (right - left) * Math.min(height[left], height[right]);
		area = Math.max(area, temp);
		height[left] > height[right] ? right-- : left++;
	}
	return area;
}

/* 42. Trapping Rain Water */

function trap(height) {
	// edge case: if theres no height, return 0
	if (!height) return 0;
	// initialize variables sum, wallHeight, maxHeight, heightIndex
	let sum = 0;
	let wallHeight = 0;
	let maxHeight = height[0];
	let heightIndex = 0;
	// find the index of the highest height in heights
	for (let i = 0; i < height.length; i++) {
		if (height[i] > maxHeight) {
			maxHeight = height[i];
			heightIndex = i;
		}
	}
	// loop over heights until the highest index
	// if cur height is taller than wallHeight, wallHeight = current height
	// at each index, find the difference between the cur height and the wall height
	for (let i = 0; i <= heightIndex; i++) {
		if (height[i] > wallHeight) {
			wallHeight = height[i];
		} else {
			sum += wallHeight - height[i];
		}
	}
	// reset wall height
	// repeat above loop in opposite direction until you reach the highest index
	wallHeight = 0;
	for (let i = height.length - 1; i >= heightIndex; i--) {
		if (height[i] > wallHeight) {
			wallHeight = height[i];
		} else {
			sum += wallHeight - height[i];
		}
	}
	return sum;
}
