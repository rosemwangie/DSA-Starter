class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek() {
    //show first node in a q
    if (!this.first) {
      return null;
    }
    return this.first;
  }

  enqueue(value) {
    const node = new Node(value);
    // if there's no first, add a new first, otherwise get in the back of the line
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.netx = node;
      this.last = node;
    }
    this.size++;
    return this;
  }

  dequeue() {
    const trackingNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return trackingNode;
  }
}

const queue = new Queue();
queue.enqueue("1st");
queue.enqueue("2nd");
queue.enqueue("3rd");
queue.enqueue("4th");
queue.dequeue();
console.log(queue);
