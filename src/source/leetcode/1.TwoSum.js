const twoSum = (nums, target) => {
  const hash = {}; 
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) { 
      return [hash[target - n], i]; 
    }
    hash[n] = i; 
  }
  return []; 
 }
 module.exports = twoSum;