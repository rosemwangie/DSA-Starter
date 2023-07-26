//node class
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

//ll class
class LinkedList {
  constructor() {
    //initialize the head and the length properties
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //append (end)  O(1) adds a new element to the end of the list
  append(value) {
    if (!this.head) {
      this.prepend(value);
    } else {
      //create a new node object with the element and next properties
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
    return this;
  }

  //Prepend (beginning)  O(1) adds to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++; //1
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  }

  //Print List (value) O(n)
  getByIndex(index) {
    // if the index is out of bounds, return null
    if (index < 0 || index >= this.size) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  //print all elements of the linked list
  printList() {
    const result = [];
    let current = this.head;
    let counter = 0;
    while (counter < this.size) {
      current = current.next;
      counter++;
    }
    return result;
  }

  //inserts a new element at a given index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return -1;
    } else if (index === 0) {
      this.prepend(value);
    } else if (data === this.size) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      let current = this.head;
      let counter = 0;

      while (counter < index - 1) {
        counter++;
        current = current.next;
      }
      let temp = current.next;
      current.next = newNode;
      newNode.next = temp;
      this.size++;
    }
    return this;
  }

  //removes the last element of the list
  delete(index) {
    // if the head is null, return null
    if (index < 0 || index >= this.size) {
      return -1;
    } else if (index === 0) {
      this.removeHead();
    } else if (index === this.size - 1) {
      this.removeTail();
    } else {
      let current = this.head;
      let count = 0;
      while (count < index - 1) {
        current = current.next;
        count++;
      }
      current.next = current.next.next;
      this.size--;
    }
  }

  // reverse
  reverse(head) {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      // While currentNode is not equal to null

      // Stash next node.
      nextNode = currentNode.next;

      // Update next node of the current node to link to previous node.
      currentNode.next = prevNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currentNode;
      currentNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}

LinkedList.fromValues = (...values) => {
  const myLinkedList = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    myLinkedList.prepend(values[i]);
  }
  return myLinkedList;
};

module.exports = LinkedList;
