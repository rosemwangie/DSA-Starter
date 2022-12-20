/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * An array is monotonic if it is either monotone increasing or monotone decreasing
 */

const isMonotonic = (nums) => {
  if (nums.length < 2) return true;

  let goingUp = true;
  let goingDown = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) goingUp = false;
    if (nums[i - 1] < nums[i]) goingDown = false;
  }

  return goingUp || goingDown;
};

console.log(isMonotonic([1, 2, 2, 3])); //Output: true
console.log(isMonotonic([6, 5, 4, 4])); //Output: true
console.log(isMonotonic([1, 3, 2])); //Output: false
