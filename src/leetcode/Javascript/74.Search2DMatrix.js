/**
 * You are given an m x n integer matrix matrix with the following two properties:
 
* Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.
You must write a solution in O(log(m * n)) time complexity.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const searchMatrix = (matrix, target) => {
    const m = matrix.length;
    const n = matrix[0].length;
  
    // Perform binary search on the flattened matrix
    let left = 0;
    let right = m * n - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2); 
      const midValue = matrix[Math.floor(mid / n)][mid % n]; 
      if (midValue === target) {
        return true; 
      } else if (midValue < target) {
        left = mid + 1; 
      } else {
        right = mid - 1; 
      }
    }
  
    return false;
  };
  
  
  
  console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // Output: true
  console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // Output: false
  console.log(searchMatrix([[]],10)); // Output: false


/**
 * * Time O(log(m * n)) | Space O(1)
 */
