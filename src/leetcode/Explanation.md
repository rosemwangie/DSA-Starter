## 1. [**Two Sum**](#twosum)

 * #### **Verify Constraints**
    1. Are the elements in the arrays positive or negative? 
    2. Will there always be a solution?
    3. Duplicates in the array?
    4. Multiple pairs that add up to the target?

 * #### **Test Cases**
      <img width="483" alt="Screenshot 2022-10-09 at 14 52 16"  align="center" src="https://user-images.githubusercontent.com/77434770/194755407-f590baf7-1cc1-4aca-98b3-ca52f13972ae.png">

 * #### **Logical Solution**
   * Naive Approach([two pointer]())
        ```jsx
        Step 1: Start
        Step 2: Pass arguments nums, target.
        Step 3: Read values nums array and compute all possible pair of the elements
        Step 4: Add nums[i] and nums[i + 1] and compare result to target.
                nums[i] + nums[i + 1] === target
        Step 5: Display/Return nums[i], nums[i + 1]
        Step 6: Stop
        
        Time Complexity - O(n^2)
        Space complexity - O(1)
        ```

   * Optimized ([Hash Tables](https://github.com/RWambui/Data-structures-and-Algorithms-Interview-prep/blob/main/src/data-structures/hash-tables/HASHTABLES.md)/HashMap) - lookup is O(1) T
       ```jsx
       Step 0. Start
       Step 1. Initialize the first pointer and an empty hash map
       Step 2. Compute the missing target
               Formulae: (Missing target = target - nums[i])
       Step 3. Check if the missing target exists in the hash map, if not,
       Step 3. Store the missing target in the hash map as the key; and it's index as the value (key:value) pair
       Step 4. If it exists, return the value of the opposing pair and the value of the current element in the hash map
       Step 5. Stop
       
       Time Complexity - O(n)
       Space complexity - O(n)
       ```
<br>

## 2. [**Add Two Numbers**]()

<br>

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
        <br>
 ## 206. [**Reverse a linked List**](#reversealinkedlist)  
 <img width="570" src="https://user-images.githubusercontent.com/77434770/197576518-8e2a76ba-e2d8-4041-8fa9-e0b0564f3e6d.png">

   * Frame of Thoughts
        ```jsx
        Step 1. Initialize pointers
                        previous = null;
                        currentNode = head'
        Step 2. stash the next pointer 
                while currentNode is not equal to null
                        next = currentNode.next;
        Step 3. reverse the currentNode
                currentNode.next = prev;
                update previous = currentNode;
                update currentNode = next;       
        Step 4. return previous (new head at the end)
        Step 5. Stop

        Time Complexity - O(n)
        Space complexity - O(n)
        ```
<img width="570" src="https://user-images.githubusercontent.com/77434770/197577054-c1ced19e-bdfb-43db-8d84-3a0d985b9245.png">
   * Optimized - [Recursion]()
        ```jsx

        ```
   <br>     

 ## 226. [**Invert Binary Tree**](#reversealinkedlist)  -- pending...
 <img width="570" src="https://user-images.githubusercontent.com/77434770/197576518-8e2a76ba-e2d8-4041-8fa9-e0b0564f3e6d.png">

   * Frame of Thoughts
        ```jsx
        Step 1. The invertTree function takes in a root node of a binary tree
                        and returns the root node of an inverted version of the tree;
        Step 2. The function first checks if the root is null 
                        If it is, it returns null because there is no tree to invert;
        Step 3. Otherwise, it inverts the left and right subtrees of the root by calling the invertTree function recursively on each of them.
                        It then swaps the left and right subtrees by updating the left and right properties of the root node;  
        Step 4. Finally, it returns the root node of the inverted tree;
        Step 5. Stop

        Time Complexity - 
        Space complexity - 
        ```
<img width="570" src="https://user-images.githubusercontent.com/77434770/197577054-c1ced19e-bdfb-43db-8d84-3a0d985b9245.png">

        ```jsx

        ```
   <br>

## 3. [Longest Substring Without Repeating Characters](#longestsubstring)

**Sliding Window technique**

- move each pointer (L , R) to the right as you record the char in a hash
- Keep track of the L, R, LongestSub, and the object
- Increment R to find the longest sub
- Check for duplicates, consider the position of L (as a starting point for the substring)

In a Sliding window technique, the two pointers(L & R) usually move in the same direction will never overtake each other. This ensures that each value is only visited at most twice and the time complexity is still O(n)

Nested For loop; Time {O(n^2) * O(n)bc if checks} ; S{O(n)} hashmap (Not the best way  to solve a problem)
