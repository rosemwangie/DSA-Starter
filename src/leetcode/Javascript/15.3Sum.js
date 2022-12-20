/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
*/
// brute force Time complexity O(n^3) Space complexity O(n)
const threeSum = (nums) => {
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

//Optimal 1 Time complexity O(n) Space complexity O(n)
const threeSum1 = (nums) => {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i];
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      let sum = nums[j] + nums[k];
      if (sum > target) {
        k--;
      } else if (sum < target) {
        j++;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        k--;
        j++;
      }
    }
  }
  return res;
};

// optimal 2 Time complexity O(n) Space complexity O(n)
const threeSum2 = (nums) => {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
      }
      if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 2, 2])); // Output:[]
console.log(threeSum([0, 0, 0])); //Output: [0,0,0]
console.log(threeSum([])); //Output: []
