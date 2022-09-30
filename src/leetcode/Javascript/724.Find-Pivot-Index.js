const pivotIndex = (nums) => {
  const len = nums.length;
  let total = 0;
  let leftSum = 0;
    
  for (let i = 0; i < len; i++) {
        total += nums[i];
    }

  for (let i = 0; i < len; i++){
    rightSum = total - leftSum - nums[i];
    if (rightSum === leftSum){
      return i
    }
    leftSum = leftSum + nums[i];
  }
  return -1   
}
module.exports = pivotIndex;