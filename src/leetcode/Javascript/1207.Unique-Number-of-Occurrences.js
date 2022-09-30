//Optimal Soln
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