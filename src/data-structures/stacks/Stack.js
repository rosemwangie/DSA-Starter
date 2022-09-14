class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  //add element to top of the stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count++;
    return this.count - 1;
  }
}

const stack = new Stack();

stack.push("JavaScript");
stack.push("Typescript");
stack.push("React");
stack.push("Next");
// stack.pop();

module.exports = Stack;
