/**
 * Linear Search
 * Running Pointers Algorithms
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/find-pivot-index/
 * @param {number[]} nums
 * 
 * 
- traverse the elements - Linear loop(for loop) and get the total sum
- to calculate the right sum, compute below formula
(rightSum = totalSum - leftSum - current nums at index)
- this formala helps exclude the left sum and pivot index num to get the right sum 
- if condition allows us to compare the left and right sum 
 */
//Optimal Solution
const pivotIndex = (nums) => {
  const len = nums.length;
  let total = 0;
  let leftSum = 0;

  for (let i = 0; i < len; i++) {
    total += nums[i];
  }

  for (let i = 0; i < len; i++) {
    rightSum = total - leftSum - nums[i];
    if (rightSum === leftSum) {
      return i;
    }
    leftSum = leftSum + nums[i];
  }
  return -1;
};
module.exports = pivotIndex;
