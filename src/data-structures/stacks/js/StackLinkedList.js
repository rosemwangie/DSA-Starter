class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  pop() {

  }
  push(value) {
    const node = new Node(value);

    //empty
    if (!this.top) {
      this.top = node;
      this.bottom = node;
    } else {
      //!empty
      let temp = this.top;
      this.top = node;
      this.top.next = temp;
    }
    this.size++;
    return this;

  }
  peek() {

  }
  isEmpty() {

  }
  search() {

  }
}

const stack = new Stack();
stack.push("900");
stack.push("800");
stack.push("700");

console.log(stack);
