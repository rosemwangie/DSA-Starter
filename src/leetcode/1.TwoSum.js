/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

//brute force/naive approach Time complexity O(n^2) Space complexity O(1)
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// Optimal soln1 Time complexity O(n) Space complexity O(n)
const twoSum1 = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};

//Optimal Soln2 Time complexity O(n) Space complexity O(1)
const twoSum2 = (nums, target) => {
  const map = nums.reduce((acc, current, idx) => {
    acc[current] = idx;
    return acc;
  }, {});
  for (let i = 0; i < nums.length; i++) {
    const missingTarget = target - nums[i];
    if (map[missingTarget]) {
      return [i, map[missingTarget]];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]
console.log(twoSum([3, 2, 4], 6)); //[1,2]
console.log(twoSum([3, 3], 6)); //[0,1]
