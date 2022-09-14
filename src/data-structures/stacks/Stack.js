class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  //add element to top of the stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} is added`);
    this.count++;
    return this.count - 1;
  }
  //remove and return top element in stack
  //return undefined if stack is undefined
  pop() {
    if (!this.count) return undefined;
    let deleteItem = this.items.pop;
    this.count--;
    console.log(`${deleteItem} is removed`);
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

stack.push("100");
stack.push("200");
stack.push("300");
stack.push("400");
stack.pop();
stack.pop();
stack.peek();
console.log(stack);

module.exports = Stack;
