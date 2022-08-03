const binarySearch = (arr, target) => {
  let firstIdx = 0
  let lastIdx = arr.length - 1

  while(lastIdx >= firstIdx){
      let middleNum = Math.floor((firstIdx + lastIdx) /2)
    if(target === arr[middleNum]){
      return middleNum
    }
    if(target < arr[middleNum]){
      lastIdx = middleNum - 1
    } else {
      firstIdx = middleNum + 1
    }   
  }
   return -1
}
