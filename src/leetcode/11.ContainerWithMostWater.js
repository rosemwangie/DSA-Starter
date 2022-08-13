/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
*/

//
const maxArea = (height) => {
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
