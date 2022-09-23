const trap = (height) => {};

console.log(trap([])); //0
console.log(trap([4])); // 0
console.log(trap([7, 8, 7])); // 0
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
