/*Given an integer array nums of length n where all the integers of nums are in the range [1, n] 
and each integer appears once or twice, return an array of all the integers that appears twice.
You must write an algorithm that runs in O(n) time and uses only constant extra space.*/


//Brute force/naive approach // O(n^2) T
const findDuplicates = (nums) => {
  if(nums.length <= 0 || nums.length === 1) return [];
  const duplicates = []; 

  for (let i = 0; i < nums.length; i++){
      const currentNum = nums[i];
   for (let j = i+1; j < nums.length; j++){
      if(nums[j] === currentNum) {
       duplicates.push(nums[i])
      }  
    }   
  }
  return duplicates;
};


// Optimal soln  O(n) T O(n) S
const findAllDuplicates = (nums) => {
  if(nums.length <= 0 || nums.length === 1) return [];
  const duplicates = [];
  const numCount = {};
  for (let i = 0; i < nums.length; i++){
    const currentNum = nums[i];
    if(numCount[currentNum]){
      numCount[currentNum] += 1;
      duplicates.push(currentNum);
    } else {
      numCount[currentNum] = 1;
    }
  }
  return duplicates;
}