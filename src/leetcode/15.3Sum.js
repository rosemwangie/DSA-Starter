/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
*/
// brute force Time complexity O(n^3) Space complexity O(1)
const threeSum1 = (nums) => {
  const len = nums.length;
  if (len < 0) return [];
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      for (let k = j + 1; k < len; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 2, 2])); // []
console.log(threeSum([0, 0, 0])); // [0,0,0]
console.log(threeSum([])); //[]
