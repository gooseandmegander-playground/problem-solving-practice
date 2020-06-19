/**
 * Two Pointers Pattern: Pair with Target Sum
 * 
 * Problem Statement:
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 * Return the indices of the pair.
 * 
 * Assume only 1 pair is possible.
 * 
 * Example 1:
 * Input: [1, 2, 3, 4, 6], target=6
 * Output: [1, 3]
 * 
 * Example 2:
 * Input: [2, 5, 9, 11], target=11
 * Output: [0, 2]
 */

function pairWithTargetSum(targetSum, arr) {
  // while there is no pairs found
  //   check the pointers' item values against targetSum
  //   increment/decrement if the values' sum is not the targetSum
  //   when a pair is found
  //     return the indices of the pointers

  let startPointer = 0;
  let endPointer = arr.length - 1;

  while (startPointer !== endPointer) {
    const currentSum = arr[startPointer] + arr[endPointer];
    if (currentSum === targetSum) {
      return [startPointer, endPointer];
    }

    if (currentSum > targetSum) {
      endPointer--;
    }
    if (currentSum < targetSum) {
      startPointer++;
    }
  }

  return [];
}

module.exports = pairWithTargetSum;