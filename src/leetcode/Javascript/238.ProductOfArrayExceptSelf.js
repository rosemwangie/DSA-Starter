/**
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = (nums) => {
    const n = nums.length;
    const result = [];
  
    // compute the product of all elements to the left of each element
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
      result[i] = leftProduct;
      leftProduct *= nums[i]; 
    }
  
    // compute the product of all elements to the right of each element, and multiply it with the corresponding left product
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
      result[i] *= rightProduct; 
      rightProduct *= nums[i]; 
  
      if (nums[i] < 0) {
        result[i] *= -1; 
      }
    }
  
    return result;
  };


console.log(productExceptSelf([1,2,3,4])); // Output: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Output: [0,0,9,0,0]
console.log(productExceptSelf([])); // Output: []

/**
 * * Time O(n) | Space O(1)
 */