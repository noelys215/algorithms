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
