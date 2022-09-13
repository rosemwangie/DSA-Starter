# Stacks
## Definition
>
> LIFO - Last In First Out

The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other.Stacks can be used with Arrays or Linked List

> [Arrays](https://github.com/RWambui/Data-structure-Interview-prep-JS/tree/main/src/data-structures/arrays) - allow cache locality, which make them technically fast when accessing items.

> [Linked List](https://github.com/RWambui/Data-structure-Interview-prep-JS/tree/main/src/data-structures/linked-lists) - have extra memory associated with them, because we have to hold on to the pointers

```
On the other hand, Linked List have more dynamic memory compared to Arrays.
```
## Corner Cases
* Empty stack. Popping from an empty
* Stack with one itme
* Stack with two items

## Complexities

  #### Time Complexity

| Lookup |  pop | push | peek | isEmpty |
|:------:|:----:|:----:|:----:|:-------:|
|  O(n)  | O(1) | O(1) | O(1) |   O(1)  |

1. **push** - add element to the last item
2. **pop** - remove the last element
3. **Peek/top** - view the top most item

## Check below leetcode questions (to enhance understanding)
  1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
  2. [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) 
  3. [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
  4. [Min Stack](https://leetcode.com/problems/min-stack/)
  5. [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)
  6. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
  7. [Basic Calculator](https://leetcode.com/problems/basic-calculator/)
  8. [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/)
  9. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
  10. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
  11. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)


  ## References
  1. [Coursera](https://www.coursera.org/lecture/data-structures/stacks-UdKzQ)
  2. [ Medium ](https://medium.com/basecs/stacks-and-overflows-dbcf7854dc67)
  3. [Udemy](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/?LSNPUBID=PPkX79%2Fc*b0&ranEAID=PPkX79%2Fc*b0&ranMID=39197&ranSiteID=PPkX79_c.b0-atM3WydGzI4qHE90fKPzHg&utm_medium=udemyads&utm_source=aff-campaign)
  4. [Design Gurus](https://designgurus.org/course/grokking-the-coding-interview)