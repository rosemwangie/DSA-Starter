class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Prepend (beginning)  O(1)
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.size++;
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

  printList() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    // console.log(`${output}null`);
  }

  //insert
  insert(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    if (index === 0) {
      this.prepend(value);
    } else {
      let count = 1;
      let currentNode = this.head;
      const newNode = new LinkedListNode(value);
      while (currentNode) {
        if (count === index) break;
        currentNode = currentNode.next;
        count += 1;
      }
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    return this;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
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
