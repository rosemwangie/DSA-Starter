## [Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation)

#### Big O helps us answer the question, “Will it scale?” <br>

It is a way to evaluate the efficiency of an algorithm.<br> Also, it allows us to determine how the algorithm will perform as the input size grows larger. <br> Instead of measuring the actual time it takes for the algorithm to run, we consider the number of steps or operations required to complete the task. <br> This helps us understand how well an algorithm scales and how it will perform with very large inputs

It is used to describe the complexity of algorithm. It allows us to determine the scalability of an algorithm.

<hr>

### Why Big O 
It helps us choose the best data structure and algorithm for certain use cases

### Prerequisites
1. Time Complexity - This is a measure of how fast an algorithm runs
2. Space Complexity - This is the measure of how much auxiliary memory an algorithm takes up

> How runtime of an algorithm grows as input grows
<br>
<img width="350" src="../../assets/bigo-cheat-sheet.png" alt="Big O"/>

<hr>

## Operations 
 * Constant O(1) - no loops
 * Logarithmic O(log(n)) - usually searching algorithms have log N  log n if they are sorted (Binary Search)
 * Linear O(n) - Your Algorithm will grow linearly based on the input
 * Logarithmic /Quasilinear O(n log n) - usually sorting operations
 * Quadratic O(n^2) - every element in a collection needs to be compared to ever other element. Two nested loops
 * Cubic O(n^3)
 * Exponential O(2^n) - recursive algorithms that solves a problem of size N
 * Factorial O(n!) - adding a loop for every element

```
Iterating through half a collection is still O(n)
Two separate collections: O(a*b)
```

<hr>

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

<hr>

## Rule Book
* Rule 1: Always check for worst case scenario
* Rule 2: Remove Constants
* Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
* Rule 4: Drop Non-dorminant terms
