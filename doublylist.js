class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
		this.null = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}

	shift() {
		if (this.length === 0) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		if (index <= this.length / 2) {
			let count = 0;
			let current = this.head;
			while (count !== index) {
				current = current.next;
				count++;
			}
		} else {
			let count = this.length - 1;
			let current = this.tail;
			while (count !== index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}
	set(i, val) {
		let foundNode = this.get(i);
		if (foundNode !== null) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(i, v) {
		if (i < 0 || i > this.length) return false;
		if (i === 0) this.unshift(v);
		if (i === this.length) return this.push(v);
		let newNode = new Node(v);
		let beforeNode = this.get(i - 1);
		let afterNode = beforeNode.next;
		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next = afterNode;
		afterNode.prev = newNode;
		this.length++;
		return true;
	}

	remove(i) {
		if (i < 0 || i >= this.length) return false;
		if (i === 0) return this.shift();
		if (i === this.length - 1) return this.pop();
		let removedNode = this.get(i);
		removedNode.prev.next = removedNode.next;
		removedNode.next.prev = removedNode.prev;
		removedNode.next = null;
		removedNode.prev = null;
		this.length--;
		return removedNode;
	}
}

const list = new DoublyLinkedList();

list.push(100);
list.push(200);
console.log(list);
