const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage

//push
strings.push('e'); //O(1)
//pop
strings.pop(); //O(1)
//unshift - insert
strings.unshift('x'); //O(n)
//splice - delete
strings.splice(2, 0, 'alien'); //O(n)

//Static Arrays vs Dynamic Arrays
let a = 'a';
let b = a;

a === 'c';

//
class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}
	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
	}
	shiftItems(index) {
		for (let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('bye');
newArray.push('!');
newArray.delete(1);

//Reverse a string

function reverse(str) {
	let word = Array.from(str);
	let reversed = [];

	for (let i = 0; i < str.length; i++) {
		lastIndex = word.pop();
		reversed.push(lastIndex);
	}
	console.log(reversed.join(''));
}

// reverse('henry');

function reverse2(str) {
	//check input
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'invalid input';
	}
	//
	const backwards = [];
	const totalItems = str.length - 1;

	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}
	console.log(backwards.join(''));
}

// reverse2('spain');

//Merge Arrays

function mergeSortedArrays(arr1, arr2) {
	let merged = arr1.concat(arr2);
	const length = merged.length;
	let sorted = [];
	for (let i = 0; i < length; i++) {
		if ([i] >= i - 1) {
			sorted.push(merged[i]);
		}
	}
	console.log(sorted);
}

// mergeSortedArrays([0, 1, 4, 31]);
// mergeSortedArrays([0, 1, 4, 31], [4, 6, 30]);

const mergeSortedArrays2 = (arr1, arr2) => {
	const mergedArray = [];
	let array1Item = arr1[0];
	let array2Item = arr2[0];
	let i = 1;
	let j = 1;

	//Check Input
	arr1.length === 0 && arr2;
	arr2.length === 0 && arr1;
	//
	while (array1Item || array2Item) {
		if (!array2Item || array1Item < array2Item) {
			mergedArray.push(array1Item);
			array1Item = arr1[i];
			i++;
		} else {
			mergedArray.push(array2Item);
			array2Item = arr2[j];
			j++;
		}
	}

	console.log(mergedArray);
};

mergeSortedArrays2([0, 1, 4, 31], [4, 6, 30]);
