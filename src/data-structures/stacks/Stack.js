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
  //remove and return top element in stack
  //return undefined if stack is undefined
  pop() {
    if (!this.count) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }
  // return the top element
  peek() {
    let peekItem = this.items[this.count];
    console.log(`${peekItem} is the top element`);
    return peekItem;
  }
}

const stack = new Stack();

stack.push("JavaScript");
stack.push("Typescript");
stack.push("React");
stack.push("NextJS");
stack.pop();
stack.pop();
stack.peek();

module.exports = Stack;
