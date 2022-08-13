/*
~You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container~

~To have in your back pocket~
      Area= L * W
 */

//Brute force solution 1 Time Complexity: O(n^2), Space Complexity: O(1)
const maxArea = (height) => {
  let totalArea = 0;
  const len = height.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let length = Math.min(height[i], height[j]);
      let width = j - i;
      let area = length * width;
      totalArea = Math.max(totalArea, area);
    }
  }
  return totalArea;
};

//Optimal solution 2 Time Complexity: O(n), Space Complexity: O(1)
const maxArea1 = (height) => {
  const len = height.length;
  let leftPointer = 0,
    rightPointer = len - 1,
    calMaxArea = 0;
  while (leftPointer < rightPointer) {
    const heights = Math.min(height[leftPointer], height[rightPointer]);
    const width = rightPointer - leftPointer;
    const area = heights * width;
    calMaxArea = Math.max(calMaxArea, area);

    if (height[leftPointer] <= height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return calMaxArea;
};

// 4 test cases
console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7])); //
console.log(maxArea1([1, 1])); // 1*1= 1
console.log(maxArea([5])); // 0
console.log(maxArea([])); // 0
