const search = (nums, target) => {
  const len = nums.length;
  let leftIdx = 0; 
  let rightIdx =  len - 1;
  while(leftIdx <= rightIdx){
      let midIdx = Math.floor((leftIdx + rightIdx)/2);
      if(target == nums[midIdx]){
          return midIdx;
      } else if (target < nums[midIdx]){
          rightIdx = midIdx - 1;
      } else {
          leftIdx = midIdx + 1;
      }
  }
  return -1
}
