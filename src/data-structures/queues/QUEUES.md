# Queues

A **queue** is a data structure that follows the First In First Out(FIFO) principle. <br> This means that the first item added to the queue will be the first one to be removed. A queue can be implemented using an array. <br> To add an item to the queue, we use push method of the array. This method adds an element to the end of the array. <br> To remove an itme from the queue, we use the shift() method of the array. This method removes the first element of the array and returns it. 

### Why Linked Lists;
Adding and removing items is O(1) operation

### Why not Arrays
1. Arrays have indexex associated with them
2. Shifting indexes is O(n) operation linearly (quite expensive)

## Operations & complexities

| Lookup | enqueue | dequeue | peek |
|:------:|:-------:|:-------:|:----:|
|  O(n)  |   O(1)  |   O(1)  | O(1) |

* **enqueue(element)** : adds an element to the end of the queue by using the push() method of the array. This method takes one parameter, the element to be added to the queue.

* **dequeue()** : removes the first element of the queue and returns it by using the shift() method of the array. If the queue is empty, it returns "Underflow"

* **front()** : returns the first element of the queue without removing it. If the queue is empty, it returns "No elements in Queue"

* **isEmpty()** : returns a boolean value indicating whether the queue is empty or not. It returns true if the queue is empty, false otherwise.

* **printQueue()** : returns the string representation of the queue elements. It loops through the queue elements and concatenates it to the string variable and returns it.

## References