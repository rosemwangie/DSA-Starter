/**
 * You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
 * Return the minimum number of boats to carry every given person.
 */

/**
 *
 * @param {*} people
 * @param {*} limit
 */

const numRescueBoats = (people, limit) => {
  // Sort the people array in asc order
  people.sort((a, b) => a - b);

  // Init the number of boats to 0
  let boats = 0;

  // Initialize left and right pointers
  let left = 0;
  let right = people.length - 1;

  // While there are still people to be rescued
  while (left <= right) {
    // If the heaviest person can be rescued with the lightest person,
    // rescue both of them and move the left pointer
    if (people[left] + people[right] <= limit) {
      left++;
    }
    // Otherwise, rescue the heaviest person alone
    right--;

    // and in either case, we need one more boat
    boats++;
  }

  return boats;
};

console.log(numRescueBoats([1, 2], 3)); // Output: 1
console.log(numRescueBoats([3, 2, 2, 1], 3)); // Output: 3
console.log(numRescueBoats([3, 5, 3, 4], 5)); // Output: 4

/**
 * Complexities
 * O(n log n) - Time
 * O(1) - space
 */
