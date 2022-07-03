/* class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	//See Top element
	peek() {
		console.log(this.top);
		return this.top;
	}
	//Add node to top of stack
	push(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer;
		}
		this.length++;
		console.log(this);
		return this;
	}
	//Remove node from top of stack
	pop() {
		if (!this.top) return null;
		if (this.top === this.bottom) this.bottom = null;
		// const holdingPointer = this.top;
		this.top = this.top.next;
		this.length--;
		return this;
	}
	//Is Empty
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek() {
		console.log(this.first);
		return this.first;
	}
	//Add to Queue
	enqueue(val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}
	//Remove from Queue
	dequeue() {
		if (!this.first) return null;
		if (this.first === this.last) this.last = null;
		this.first = this.first.next;
		this.length--;
		console.log(this);
		return this;
	}
}

const myQueue = new Queue(); */

/* myQueue.enqueue('Hen');
myQueue.enqueue('Jen');
myQueue.enqueue('Ten');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
 */

class MyQueue {
	constructor() {
		this.pushStack = [];
		this.popStack = [];
	}

	push(val) {
		this.pushStack.push(val);
	}

	pop() {
		if (this.popStack.length === 0) {
			while (this.pushStack.length) {
				this.popStack.push(this.pushStack.pop());
			}
		}
		return this.popStack.pop();
	}

	peek() {
		if (!this.popStack.length) {
			while (this.pushStack.length) {
				this.popStack.push(this.pushStack.pop());
			}
		}
		return this.popStack[this.popStack.length - 1];
	}

	empty() {
		return !this.pushStack.length && !this.popStack.length;
	}
}
