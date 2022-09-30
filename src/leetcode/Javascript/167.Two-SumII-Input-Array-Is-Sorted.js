/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length. Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.The tests are generated such that there is exactly one solution. You may not use the same element twice. Your solution must use only constant extra space
*/
//Brute force solution Time complexity O(n^2) Space complexity O(1)
const twoSumII = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (sum === target) return [i + 1, j + 1];
    }
  }
  return [];
};

//Optimal solution Time complexity O(n) Space complexity O(1)
const twoSum11 = (numbers, target) => {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
};

console.log(twoSumII([2, 7, 11, 15], 9)); //[1,2]
console.log(twoSumII([2, 3, 4], 6)); //[1,3]
console.log(twoSumII([], 9)); //[]
