/**
 * Implementing a Queue using Array
 */
class Queue {
  constructor() {
    // Initialize an empty array to store the elements in the queue
    this.items = [];
  }

  enqueue(element) {
    // Add an element to the end of the queue using the push() method of the array
    this.items.push(element);
  }

  dequeue() {
    // Check if the queue is empty
    if (this.isEmpty()) {
      // If it is, return "Underflow"
      return "Underflow";
    }
    // If not, remove the first element of the queue and return it using the shift() method of the array
    return this.items.shift();
  }

  front() {
    // Check if the queue is empty
    if (this.isEmpty()) {
      // If it is, return "No elements in Queue"
      return "No elements in Queue";
    }
    // If not, return the first element of the queue without removing it
    return this.items[0];
  }

  isEmpty() {
    // Return a boolean value indicating whether the queue is empty or not
    return this.items.length == 0;
  }

  printQueue() {
    var str = "";
    // Loop through the elements and concatenate it to the string variable
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    // Return the string representation of the queue elements
    return str;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.printQueue()); // Output: "2 3"
