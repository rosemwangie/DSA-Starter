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
  //pop
  pop() {
    if (!this.top) {
      return -1;
    }
    if (this.length === 1) {
      let top = this.top;
      this.top = null;
      this.bottom = null;
      this.size--;
      return top;
    } else {
      let top = this.top;
      this.top = this.top.next;
      this.size--;
      return top;
    }

    return this;
  }

  //push
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
  //peek
  peek() {
    if (this.top) {
      return this.top;
    } else return -1;
    return this;
  }
  //empty stack
  isEmpty() {
    return this.top === 0;
  }
}

const stack = new Stack();
stack.push("900");
stack.push("800");
stack.push("700");
stack.pop();
stack.pop();
stack.peek();

console.log(stack);
