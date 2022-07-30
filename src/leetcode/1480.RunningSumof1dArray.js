const runningSum = (nums) => {
  let sumNums = 0;  
  for (let i = 0; i < nums.length; i++) {  
    sumNums += nums[i];
    nums[i] = sumNums;
  }
  return nums;
}