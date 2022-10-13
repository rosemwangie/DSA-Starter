## Big O Notation / Asymptotic Analysis
Big O Notation is used to describe the time complexity and space complexity of algorithm. 

It is understood to describe the worst case scenario of an algorithm

### Why Big O
It helps us choose the best data structure and algorithm for certain use cases

### Prerequisites
1. Time Complexity - This is a measure of how fast an algorithm runs
2. Space Complexity - This is the measure of how much auxiliary memory an algorithm takes up

> How runtime of an algorithm grows as input grows
<br>
<img width="350" src="../../assets/bigo-cheat-sheet.png" alt="Big O"/>

## Operations 
 * Constant O(1) - no loops
 * Logarithmic O(log(n)) - usually searching algorithms have log N  log n if they are sorted (Binary Search)
 * Linear O(n) - Your Algorithm will grow linearly based on the input
 * Logarithmic O(n log n) - usually sorting operations
 * Quadratic O(n^2) - every element in a collection needs to be compared to ever other element. Two nested loops
 * Cubic O(n^3)
 * Exponential O(2^n) - recursive algorithms that solves a problem of size N
 * Factorial O(n!) - adding a loop for every element

```
Iterating through half a collection is still O(n)
Two separate collections: O(a*b)
```

## What can cause time complexity
* Operations (+.-,*,/)
* Comparisons(<,>, ==)
* Looping (for, while)
* Outside function call function()

## What can cause space complexity
* Variables
* Data structures 
* Function Call
* Allocations


## Rule Book
Rule 1: Always check for worst case scenario
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
Rule 4: Drop Non-dorminant terms
