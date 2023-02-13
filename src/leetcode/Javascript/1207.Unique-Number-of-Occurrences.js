/**
 * Given an array of integers arr, return true if the number of occurrences of each value in 
 * the array is unique or false otherwise.
 */


//Optimal sln1-> Time Complexity O(n) Space Complexity O(n)
const uniqueOccurrences = (arr) => {
 if(arr.length === 0) {
    return -1
  }
 const hashMap = {}
  for(let i = 0; i < arr.length; i++) {
    if(!hashMap[arr[i]]) {
      hashMap[arr[i]] = 1
    } else {
      hashMap[arr[i]]++
    }
  }
  
 let count = Object.values(hashMap)
  if(count.length === new Set(count).size) { // returns true or false
    return true
  } 
  return false
};


console.log(uniqueOccurrences([1,2,2,1,1,3])) //Output->true
console.log(uniqueOccurrences([1,2])) //Output->false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])) //Output->true