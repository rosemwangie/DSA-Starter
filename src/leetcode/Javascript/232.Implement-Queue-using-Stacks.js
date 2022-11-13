/**
 * Initialization.
 */
 const MyQueue = () => {
  this.dequeue = [];
};

/**
* Push element j to the back of queue. 
* @param {number} j
* @return {void}
*/
MyQueue.prototype.push = function(j) {
  this.dequeue.unshift(j)
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  return this.dequeue.pop();
};

/**
* Get the front/first element on the queue.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  const front = this.dequeue.length - 1;
  return this.dequeue[front];
};

/**
* checks queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.dequeue.length === 0;
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/