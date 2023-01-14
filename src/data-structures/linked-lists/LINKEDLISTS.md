## **Linked Lists**
A **[linked List]()** is used to represent sequential data.<br>It is a data structure where each element is a separate object, called a [node](#node), that stores a reference  ([pointer](#pointer))to the next node in the list.<br>In js, linked lists can be implemented using objects and arrays.

### Pointer
This is a reference to another place memory

### Node 
This is a bucket of data

In order to access elements/nodes in a linked list, we have to traverse through all of the items sequentially just like arrays.<br>Linked lists are made of nodes. The node represented by value and a pointer commonly referred to as next. <br> A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible.

## Types of Linked Lists
1. **Singly Linked List** : <br>Each node in the list contains a reference or a pointer to the the next node in the list. The last node in the list (tail) contains a reference to null, indicating the end of the list. The main disadvantage of this, is that you can only traverse the list in one direction, from the first node(head) to the last node(tail)
2. **Doubly Linked List**
3. **Circular Linked Lists**


### Time Complexity

| Access | Lookup | Insert(at) | Deletion |
|:------:|:------:|:----------:|:--------:|
|  O(n)  |  O(n)  |    O(1)    |   O(n)   |

Access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality as compared to linked lists.


### **Basic Operations**
### Traverse

```text
Traverse(head)
  Pre: head is the head node in the list
  Post: the items in the list have been traversed
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

## prepend 
//

## append
const node 

## lookup

## insertAt

## removeAt

## clear

# Corner cases
* Empty linked list (head is null)
* Single node
* Two nodes
* Linked list has cycles.

![](https://img.shields.io/static/v1?label=&message=💡Tip:&color=orange): Clarify beforehand with the interviewer whether there can be a cycle in the list. Usually the answer is no and you don't have to handle it in the code

To see how a linked list is implemented see [here]()

## Related Questions
| No | Problem Statement                                                         |
|----|---------------------------------------------------------------------------|
| 1. | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) |
|    |                                                                           |

## References

# Articles

1.  [Medium](https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d)

# Videos

2.  [Coursera](https://www.coursera.org/lecture/data-structures/singly-linked-lists-kHhgK)
