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

console.log(newArray);
