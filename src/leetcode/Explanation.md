 ## Pseudo Code
 
 1. [**Two Sum**](#twosum)

```jsx
Step 1: Start
Step 2: pass parameters nums, target.
Step 3: Read values nums array.
Step 4: Add nums[i] and nums[i + 1] and compare result to target.
        nums[i] + nums[i + 1] === target
Step 5: Display/Return nums[i], nums[i + 1]
Step 6: Stop
```
  
<br>


42. [**Trapping Rain Water**](#trappingrainwater)

```jsx
Brute force approach
For every index, find amount of water stored
Find the left max and right max where left max is maximum height of building to the left and maximum height of the building to the right
So amount of water stored will be
Amount of water stored at any index = minimum(leftMax for currentIndex, rightMax for currentIndex) - height of building at currentIndex.
Time Complexity - O(n^2) because for every index we are moving from i to 0 to find leftMax and from i to n - 1 to find rightMax so we are traversing whole array for every index so it makes an nested loop so O(n^2) will be T.C
Space Complexity - O(1)
Optimised - Prefix Sum
Find max height(prefix sum) of building travesing from left of array
Find max height(prefix sum) of building travesing from right of array.
Then for current index look for prefix sum from both arrays and find the amount of water stored at that point.
Time Complexity - O(n)
Space complexity - O(n)
```





