
//node class
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//ll class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //append (end)  O(1)
  append(value) {
    if (!this.head) {
      this.prepend(data);
    } else {
      const node = new Node(value);
      this.tall.next = node;
      this.tail = node;
      this.size++;
    }
    return this;
  }

  //Prepend (beginning)  O(1)
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  }

  //Print List (value) O(n)
  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  //print all nodes
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

  //insert
  insert(value, index) {
    if (index < 0 || index > this.length) {
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

  //delete
  delete(index) {
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
      this.length--;
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

export default LinkedList;
