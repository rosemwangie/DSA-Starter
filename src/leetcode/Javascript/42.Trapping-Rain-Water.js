
//Formulae
// currentWater = min(maxL, maxR) - currentHeight

//Steps
      /* 1. Compare pointer(maxLeft) to each elemet in the array
         2. Keep track of the maxRight (j = i + 1) (the highest number)
         3. Compute the minimum by comparing the pointer(maxLeft) and maxRight
         4. Subtract the Min - current Height
         5. Record the total
      */ 

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


//Optimal solution

const trapWater = (height) => {
  let leftIdx = 0,
    rightIdx = height.length - 1;
  let maxLeft = 0,
    maxRight = 0,
    res = 0;
  while (leftIdx < rightIdx) {
    maxLeft = Math.max(maxLeft, height[leftIdx]);
    maxRight = Math.max(maxRight, height[rightIdx]);

    if (height[leftIdx] < height[rightIdx]) {
      res += maxLeft - height[leftIdx++];
    } else {
      res += maxRight - height[rightIdx--];
    }
  }
  return res;
};
console.log(trapWater()); //Output:
console.log(trapWater([4])); //Output:
console.log(trapWater([7, 8, 7])); //Output:
console.log(trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //Output:
console.log(trapWater([4, 2, 0, 3, 2, 5])); //Output:


// Time Complexity - O(n^2) This is because for every index we are moving from i to 0 to find leftMax and from i to n - 1 to find rightMax so we are traversing whole array for every index so it makes an nested loop so O(n^2) will be T.C
// Space Complexity - O(1)
