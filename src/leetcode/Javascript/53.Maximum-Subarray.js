/*
*Given an integer array nums, find the subarray with the largest sum, and return its sum.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = (nums) =>  {
    // Initialize variables to keep track of the maximum sum seen so far
    // and the current sum of the subarray being considered
    let maxSum = -Infinity
    let currentSum = 0
    
    // Iterate through the array of integers
    for (const num of nums) {
        // Add the current element to the current sum
        currentSum += num
        
        // Update the maximum sum if the current sum is larger
        maxSum = Math.max(maxSum, currentSum)
        
        // If the current sum becomes negative, reset it to 0
        // (since any subarray that includes negative numbers will never have
        // a larger sum than a subarray that starts at a later index)
        if (currentSum < 0) {
            currentSum = 0
        }
    }
    
    // Return the maximum sum
    return maxSum
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) //Output: 6
console.log(maxSubArray([1])) //Output: 1
console.log(maxSubArray([[5,4,-1,7,8]])) //Output: 23


/*
* Time complexity - This solution has a time complexity of O(n), 
where n is the length of the input array. 
This is because the solution only iterates through the array once, 
so the time complexity is directly proportional to the size of the input.
*/

