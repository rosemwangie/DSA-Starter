/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
*/

//Optimal Soln Time complexity O(n) Space complexity O(1)
const runningSum = (nums) => {
  let sumNums = 0;
  for (let i = 0; i < nums.length; i++) {
    sumNums += nums[i];
    nums[i] = sumNums;
  }
  return nums;
};

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3,4,6,16,17]
