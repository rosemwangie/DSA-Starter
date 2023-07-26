class BinarySearch {
  // binary search only works on sorted arrays
  search(sortedArray, target, comparator) {
    let start = 0;
    let end = sortedArray.length - 1;
    let mid = Math.floor((start + end) / 2);

    // if a comparator is passed in, use it to compare the target and the middle element
    if (comparator !== undefined) {
      while (comparator(target, sortedArray[mid]) !== 0 && start <= end) {
        // if the target is less than the middle element, then the target is in the left half of the array
        if (comparator(target, sortedArray[mid]) === -1) {
          end = mid - 1;
        }
        // if the target is greater than the middle element, then the target is in the right half of the array
        else {
          start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
      }

      // if the target is not found, return -1
      return comparator(target, sortedArray[mid]) === 0 ? mid : -1;
    }

    while (sortedArray[mid] !== target && start <= end) {
      // if the target is less than the middle element, then the target is in the left half of the array
      if (target < sortedArray[mid]) {
        end = mid - 1;
      }
      // if the target is greater than the middle element, then the target is in the right half of the array
      else {
        start = mid + 1;
      }
      mid = Math.floor((start + end) / 2);
    }

    // if the target is not found, return -1
    return sortedArray[mid] === target ? mid : -1;
  }
}

module.exports = BinarySearch;
