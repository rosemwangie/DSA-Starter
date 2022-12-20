/*Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
*/
//Optimal solution TIme complexity O(log n) Space complexity O(1)
const findFirstAndLast = (nums, target) => {
  const first = firstEl(nums, target);
  const last = lastEl(nums, target, first);
  return [first, last];
};

function firstEl(nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let firstPosition = -1;
  while (leftPointer <= rightPointer) {
    let mid = Math.floor((leftPointer + rightPointer) / 2);
    if (nums[mid] >= target) {
      if (nums[mid] === target) {
        firstPosition = mid;
      }
      rightPointer = mid - 1;
    } else {
      leftPointer = mid + 1;
    }
  }
  return firstPosition;
}

function lastEl(nums, target, first) {
  let leftPointer = first;
  let rightPointer = nums.length - 1;
  let lastPosition = first;
  while (leftPointer <= rightPointer) {
    let mid = Math.floor((leftPointer + rightPointer) / 2);
    if (nums[mid] <= target) {
      if (nums[mid] === target) {
        lastPosition = mid;
      }
      leftPointer = mid + 1;
    } else {
      rightPointer = mid - 1;
    }
  }
  return lastPosition;
}

console.log(findFirstAndLast([5, 7, 7, 8, 8, 10]), 8); //Output: [3,4]
console.log(findFirstAndLast([5, 7, 7, 8, 8, 10]), 6); //Output: [-1,-1]
console.log(findFirstAndLast([])); //Output: [-1,-1]
