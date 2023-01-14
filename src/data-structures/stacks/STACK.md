# Stacks
A _**stack**_ is an abstract linear data structure that serves a particular perfomance of operations. The principle operations are; **push** and **pop**
LIFO - _Last In First Out_

The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other.Stacks can be used with Arrays or Linked List

A stack is implemented using a dynamic array or a singly linked list <br>
[Arrays](https://github.com/RWambui/Data-structure-Interview-prep-JS/tree/main/src/data-structures/arrays) - allow cache locality, which make them technically fast when accessing items.<br>[Linked List](https://github.com/RWambui/Data-structure-Interview-prep-JS/tree/main/src/data-structures/linked-lists) - have extra memory associated with them, because we have to hold on to the pointers<br>
On the other hand, Linked List have more dynamic memory compared to Arrays.

<hr>

### Corner Cases
* Empty stack. Popping from an empty
* Stack with one itme
* Stack with two items

<hr>

### Basic operations

| Lookup |  pop | push | peek | isEmpty |
|:------:|:----:|:----:|:----:|:-------:|
|  O(n)  | O(1) | O(1) | O(1) |   O(1)  |

  * **push** - add element to the last item
  * **pop** - remove the last element
  * **Peek/top** - view the top most item

<hr>

### Check below leetcode questions
  1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) ![](https://img.shields.io/static/v1?label=&message=Easy&color=darkgreen)
  2. [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) ![](https://img.shields.io/static/v1?label=&message=Easy&color=darkgreen) 
  3. [Generate Parentheses](https://leetcode.com/problems/implement-queue-using-stacks/) ![](https://img.shields.io/static/v1?label=&message=Medium&color=orange) 
  4. [Min Stack](https://leetcode.com/problems/min-stack/) ![](https://img.shields.io/static/v1?label=&message=Medium&color=orange) 
  5. [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) ![](https://img.shields.io/static/v1?label=&message=Medium&color=orange) 
  6. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) ![](https://img.shields.io/static/v1?label=&message=Medium&color=orange) 
  7. [Basic Calculator](https://leetcode.com/problems/basic-calculator/) ![](https://img.shields.io/static/v1?label=&message=Hard&color=darkred)
  8. [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/) ![](https://img.shields.io/static/v1?label=&message=Medium&color=orange) 
  9. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) ![](https://img.shields.io/static/v1?label=&message=Medium&color=orange) 
  10. [Car Fleet](https://leetcode.com/problems/car-fleet/) ![](https://img.shields.io/static/v1?label=&message=Medium&color=orange) 
  10. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) ![](https://img.shields.io/static/v1?label=&message=Hard&color=darkred) 
  11. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) ![](https://img.shields.io/static/v1?label=&message=Hard&color=darkred) 

<hr>

  ### References
  1. [Coursera](https://www.coursera.org/lecture/data-structures/stacks-UdKzQ)
  2. [ Medium ](https://medium.com/basecs/stacks-and-overflows-dbcf7854dc67)
  3. [Udemy](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/?LSNPUBID=PPkX79%2Fc*b0&ranEAID=PPkX79%2Fc*b0&ranMID=39197&ranSiteID=PPkX79_c.b0-atM3WydGzI4qHE90fKPzHg&utm_medium=udemyads&utm_source=aff-campaign)
  4. [Design Gurus](https://designgurus.org/course/grokking-the-coding-interview)