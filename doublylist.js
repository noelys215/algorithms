class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// List Ex 1 - Basic
/* 
const printLinkedList = (head) => {
	let current = head;
	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
};
*/

/* const printLinkedList = (head) => {
	if (head === null) return;
	console.log(head.val);
	printLinkedList(head.next);
};

printLinkedList(a); */

/* const linkedListValues = (head) => {
	const values = [];
	let current = head;
	while (current !== null) {
		values.push(current.val);
		current = current.next;
	}
	console.log(values);
};

linkedListValues(a); */

/* const fillValues = (head, values) => {
	if (head === null) return;
	values.push(head.val);
	fillValues(head.next, values);
};

const linkedListValues = (head) => {
	const values = [];
	fillValues(head, values);
	console.log(values);
};

linkedListValues(a); */

/* const sumList = (head) => {
	let sum = 0;
	let current = head;
	while (current !== null) {
		sum += current.val;
		current = current.next;
	}
	console.log(sum);
}; */

/* const sumList = (head) => {
	if (head === null) return 0;
	return head.val + sumList(head.next);
};

sumList(a);
 */

/* const linkedListFind = (head, target) => {
	let current = head;
	while (current !== null) {
		if (current.val === target) {
			return true;
		}
		current = current.next;
	}
	return false;
}; */

// function getNodeValue(head, index) {
// 	if (head === null) return null;
// 	if (index === 0) return head.val;
// 	return getNodeValue(head.next, index - 1);
// }

// console.log(getNodeValue(a, 2));

/* const reverseList = (head) => {
	let prev = null;
	let current = head;
	while (current !== null) {
		const next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
};
 */

// const reverseList = (head, prev = null) => {
// 	if (head === null) return prev;
// 	const next = head.next;
// 	head.next = prev;
// 	return reverseList(next, head);
// };

// const zipperLists = (head1, head2) => {
// 	let tail = head1;
// 	let current1 = head1.next;
// 	let current2 = head2;
// 	let count = 0;

// 	while ((current1 !== null) & (current2 !== null)) {
// 		if (count % 2 === 0) {
// 			tail.next = current2;
// 			current2 = current2.next;
// 		} else {
// 			tail.next = current1;
// 			current1 = current1.next;
// 		}
// 		tail = tail.next;
// 		count += 1;
// 	}
// 	if (current1 !== null) tail.next = current1;
// 	if (current2 !== null) tail.next = current2;

// 	return head1, head2;
// };

// const mergeTwoLists = (head1, head2) => {
// 	if (head1 === null && head2 === null) return null;
// 	if (head1 === null) return head2;
// 	if (head2 === null) return head1;

// 	const next1 = head1.next;
// 	const next2 = head2.next;
// 	head1.next = head2;
// 	head2.next = mergeTwoLists(next1, next2);
// 	return head1;
// };

/* const mergeTwoLists = (list1, list2) => {
	if (list1 == null) return list2;
	if (list2 == null) return list1;

	if (list1.val < list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	} else {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
}; */

const mergeTwoLists = (l1, l2) => {
	const dummy = new ListNode(-Infinity);
	let prev = dummy;

	while (l1 && l2) {
		if (l1.val <= l2.val) {
			prev.next = l1;
			prev = l1;
			l1 = l1.next;
		} else {
			prev.next = l2;
			prev = l2;
			l2 = l2.next;
		}
	}
	if (!l1) prev.next = l2;
	if (!l2) prev.next = l1;
	return dummy.next;
};
