/*
//Formulae
// currentWater = min(maxL, maxR) - currentHeight

Steps
1. Compare pointer(maxLeft) to each elemet in the array
2. Keep track of the maxRight (j = i + 1) (the highest number)
3. Compute the minimum by comparing the pointer(maxLeft) and maxRight
4. Subtract the Min - current Height
5. Record the total
*/

// Thought process

//Brute force solution
/*
 Asymptotic analysis
 Time complexity O(n^2)
 space complexity O(1) 
*/

const trap = (height) => {
  let totalWater = 0;
  for (let i = 0; i < height.length; i++) {
    let leftP = i;
    let rightP = i;
    let maxLeft = 0;
    let maxRight = 0;
    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, height[leftP]);
      leftP--;
    }
    while (rightP < height.length) {
      maxRight = Math.max(maxRight, height[rightP]);
      rightP++;
    }
    const currentWater = Math.min(maxLeft, maxRight) - height[i];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};

//Test cases
console.log(trap([])); //0
console.log(trap([4])); // 0
console.log(trap([7, 8, 7])); // 0
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9

//Optimal solution
