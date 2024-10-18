/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const twoSum = function (nums, target) {
  const pastNums = {};
  let index = 0;
  while (nums.length) {
    const currentNum = nums.shift();
    const missingNum = target - currentNum;

    if (pastNums[missingNum] !== undefined) {
      return [pastNums[missingNum], index];
    } else {
      pastNums[currentNum] = index;
      index++;
    }
  }
  return [-1, -1];
};
// Test case 1: Basic test with positive numbers
console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [0, 1]

// Test case 2: Test with negative numbers
console.log(twoSum([3, 2, 4], 6)); // Expected output: [1, 2]

// Test case 3: Test with no valid solution
console.log(twoSum([1, 2, 3], 7)); // Expected output: [-1, -1]

// Test case 4: Test with repeated numbers
console.log(twoSum([3, 3], 6)); // Expected output: [0, 1]

// Test case 5: Test with large numbers
console.log(twoSum([100, 200, 300, 700], 900)); // Expected output: [2, 3]

// Test case 6: Test with negative and positive numbers
console.log(twoSum([-3, 4, 3, 90], 0)); // Expected output: [0, 2]

// Test case 7: Test with an empty array
console.log(twoSum([], 10)); // Expected output: [-1, -1]

// Test case 8: Test where the target is zero
console.log(twoSum([0, 4, 0], 0)); // Expected output: [0, 2]
