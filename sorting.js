//Bubble Sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array, length = array.length) {
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if (array[j] > array[j + 1]) {
				// Swap numbers
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	console.log(numbers);
}
// bubbleSort(numbers);

//Select Sort
function selectionSort(array, length = array.length) {
	for (let i = 0; i < length; i++) {
		// set current index as min
		let min = i;
		let temp = array[i];
		for (let j = i + 1; j < length; j++) {
			if (array[j] < array[min]) {
				// update min if current is less than prev
				min = j;
			}
		}
		array[i] = array[min];
		array[min] = temp;
	}
	console.log(array);
	return array;
}

// selectionSort(numbers);

// Insertion Sort
function insertionSort(array, length = array.length) {
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
			//move number to the first position
			array.unshift(array.splice(i, 1)[0]);
		} else {
			//find where number should go
			for (let j = 1; j < i; j++) {
				if (array[i] > array[j - 1] && array[i] < array[j]) {
					//move number to the right spot
					array.splice(j, 0, array.splice(i, 1)[0]);
				}
			}
		}
	}
	console.log(array);
}

// insertionSort(numbers);

// Merge Sort
function sortArray(array, length = array.length) {
	//Check if array can be split
	if (length < 2) return array;
	//Get Middle Index
	const middle = Math.floor(length / 2);
	// Split Array in two; right and left
	const left = array.slice(0, middle);
	const right = array.slice(middle);
	//Use recursion to continue splitting
	console.log('split:', left, 'split:', right);
	return merge(sortArray(left), sortArray(right));
}

function merge(left, right) {
	//Create New Array
	const result = [];
	// Check if either left or right array is empty
	while (left.length && right.length) {
		// Find lower Value
		if (left[0] <= right[0]) {
			// Add left value
			result.push(left.shift());
		} else {
			// Add Right Value
			result.push(right.shift());
		}
	}
	// Merge left array
	while (left.length) result.push(left.shift());
	// Merge right array
	while (right.length) result.push(right.shift());
	// Return result array
	console.log('result:', result);
	return result;
}

// const answer = sortArray(numbers);
// console.log(answer);

// Sorting Interview

//#1 - Sort 10 schools around your house by distance:
/* Insertion Sort: Really fast on small sorts; easy to code, space complexity of O(1) */

//#2 - eBay sorts listings by the current Bid amount:
/* Radix or Counting Sort: Bid is usually a fixed length number  */

//#3 - Sport scores on ESPN
/* Quick Sort: Most efficient, merge sort uses more memory, Quick Sort would have better space complexity   */

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
/* Merge Sort: We wont be sorting in memory because data is so big, Merge Sort has better performance */

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
/* Insertion Sort: Most of prev data is already sorted; all im doing is adding two new reviews to data;insertion sort for pre-ordered lists works better than other types of sorting  */

//#6 - Temperature Records for the past 50 years in Canada
/* Radix/Counting Sort if temps have no decimals, otherwise Quick Sort for in memory sorting */

//#7 - Large user name database needs to be sorted. Data is very random.
/* Merge Sort: if we have enough memory or Quick Sort if space isn't a problem and i could pick a good pivot */

//#8 - You want to teach sorting for the first time
/* BubbleSort/Selection Sort */
