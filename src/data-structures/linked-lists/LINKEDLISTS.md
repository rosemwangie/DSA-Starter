## **Linked Lists**
A **[linked List]()** is used to represent sequential data.

A **Pointer** is a reference to another place memory
A **Node** is a bucket of data

In order to access elements/nodes in a linked list, we have to traverse through all of the itemssequentially just like arrays.
Linked lists are made of nodes. The node represented by value and a pointer commonly referred to as next.

In languages like JS, Ruby, py we don't have to think about memory allocation. Memory management for data structures like arrays and linked lists happens dynamically.

Linear order is not given by their physical placement in memory. Instead each element contains an address of the next element. Each node contains: data, a reference(link) to the next node in the sequence.Arrays have better cache locality as compared to linked lists.

A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible.

Types of Linked Lists
1. **Singly Linked List**
2. **Doubly Linked List**
3. **Circular Linked Lists**

### **Basic Operations**
### Time Complexity

| Access | Lookup | Insert(at) | Deletion |
|:------:|:------:|:----------:|:--------:|
|  O(n)  |  O(n)  |    O(1)    |   O(n)   |

### Space Complexity

O(n)

Access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality as compared to linked lists.



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

## append

## lookup

## insertAt

## removeAt

## clear

# Corner cases

- Empty linked list (head is null)
- Single node
- Two nodes
- Linked list has cycles.
  Tip: Clarify beforehand with the interviewer whether there can be a cycle in the list. Usually the answer is no and you don't have to handle it in the code

# Implementations
[JS]()
```
```



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
