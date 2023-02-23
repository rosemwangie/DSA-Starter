class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // add element to top of the stack
  push(element) {
    this.items[this.count] = element;
    this.count++;
    return this.count - 1;
  }

  // remove element and return top element in stack
  // return undefined if stack is empty
  pop() {
    if (this.count === 0) return undefined;
    // remove item from top of stack
    this.items.splice(this.count - 1, 1);
    this.count--;
    // if stack will be empty after this, return 0
    if (this.count === 0) {
      return 0
    }
    else {
      const topItem = this.items[this.count - 1];
      return topItem;
    }
  }
  // return the top element
  peek() {
    let peekItem = this.items[this.count - 1];
    return peekItem;
  }

  // is empty
  isEmpty() {
    return this.count === 0;
  }
}

module.exports = Stack;
