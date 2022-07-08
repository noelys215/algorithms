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

const answer = sortArray(numbers);
// console.log(answer);
