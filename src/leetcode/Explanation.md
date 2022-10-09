## 1. [**Two Sum**](#twosum)

 * #### **Verify corner cases**
    1. Are the elements in the arrays positive or negative? 
    2. Will there always be a solution?
    3. Duplicates in the array?
    4. Multiple pairs that add up to the target?

 * #### **Test Cases**
      <img width="483" alt="Screenshot 2022-10-09 at 14 52 16"  align="center" src="https://user-images.githubusercontent.com/77434770/194755407-f590baf7-1cc1-4aca-98b3-ca52f13972ae.png">

 * #### **Logical Solution**
   * Naive ([two pointer]())
        ```jsx
        Step 1: Start
        Step 2: Pass arguments nums, target.
        Step 3: Read values nums array and compute all possible pair of the elements
        Step 4: Add nums[i] and nums[i + 1] and compare result to target.
                nums[i] + nums[i + 1] === target
        Step 5: Display/Return nums[i], nums[i + 1]
        Step 6: Stop
        ```

   * Optimized ([hash tables])


## 2. Add Two Numbers

## 42. [**Trapping Rain Water**](#trappingrainwater)

   * Naive Approach
        ```jsx
        Step 0: Start
        Step 1. For every index, find amount of water stored
        Step 2. Find the left max and right max, where left max is maximum height of the current water to the left,
                and right max is the maximum of the current water to the right
        Step 3. The amount of water stored will be Amount of water stored at any index
                Total water = minimum(leftMax for currentIndex, rightMax for currentIndex) - height at currentIndex.
        Step 4: Stop

        Time Complexity - O(n^2)
        Space complexity - O(1)
        ```

   * Optimized - [Prefix Sum]()

        ```jsx
        Step 1. Find max height(prefix sum) of building travesing from left of array
        Step 2. Find max height(prefix sum) of building travesing from right of array.
        Step 3. Then for current index look for prefix sum from both arrays 
                and find the amount of water stored at that point.

        Time Complexity - O(n)
        Space complexity - O(n)
        ```





