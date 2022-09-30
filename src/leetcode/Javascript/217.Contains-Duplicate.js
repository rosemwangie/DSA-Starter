/*
Given an integer array nums,return true if any value appears at least twice in the array, 
and return false if every element is distinct.
*/

//Brute force solution Time Complexity: O(n^2), Space Complexity: O(1)
const containsDuplicate = (nums) => {
  if (nums.length <= 0) return false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// Optimal solution 1, using sorting Time Complexity: O(nlogn), Space Complexity: O(1)
const containDuplicate = (nums) => {
  if (nums.length <= 0) return false;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// Optimal solution 2, using hashmaps Time Complexity: O(n), Space Complexity: O(n)
const containDuplicate1 = (nums) => {
  let map = new Map();
  for (num of nums) {
    if (map.has(num)) return true;
    map.set(num);
  }
  return false;
};
//tests
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate1([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate1([]));
