/*~You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container */

//Brute force solution 1 Time Complexity: O(n^2) Space Complexity: O(1)
const maxArea = (height) => {
  let res = 0;
  const len = height.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let length = Math.min(height[i], height[j]);
      let width = j - i;
      let area = length * width;
      res = Math.max(res, area);
    }
  }
  return res;
};

//Optimal solution 2 Time Complexity: O(n) Space Complexity: O(1)
const maxArea1 = (height) => {
  const len = height.length;
  let i = 0,
    j = len - 1,
    res = 0;
  while (i < j) {
    const length = Math.min(height[i], height[j]);
    const width = j - i;
    const area = length * width;
    res = Math.max(res, area);

    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return res;
};

// 4 test cases
console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Outputs:
console.log(maxArea1([1, 1])); // Outputs: 1*1= 1
console.log(maxArea([5])); //Outputs:  0
console.log(maxArea([])); // Outputs: 0
