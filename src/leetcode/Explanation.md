 ## Pseudo Code
 
 1. [**Two Sum**](#twosum)

   * Naive
```jsx
Step 1: Start
Step 2: pass parameters nums, target.
Step 3: Read values nums array.
Step 4: Add nums[i] and nums[i + 1] and compare result to target.
        nums[i] + nums[i + 1] === target
Step 5: Display/Return nums[i], nums[i + 1]
Step 6: Stop
```

   * Optimized
  
<br>


42. [**Trapping Rain Water**](#trappingrainwater)

   * Naive Approach
```jsx
Step 1. For every index, find amount of water stored
Step 2. Find the left max and right max, where left max is maximum height of the current water to the left,
        and right max is the maximum of the current water to the right
Step 3. The amount of water stored will be Amount of water stored at any index
        Total water = minimum(leftMax for currentIndex, rightMax for currentIndex) - height at currentIndex.

Time Complexity - O(n^2)
Space complexity - O(1)
```

   * Optimized - [Prefix Sum]()

```jsx
Step 1. Find max height(prefix sum) of building travesing from left of array
Step 2. Find max height(prefix sum) of building travesing from right of array.
Step 3. Then for current index look for prefix sum from both arrays and find the amount of water stored at that point.

Time Complexity - O(n)
Space complexity - O(n)
```





