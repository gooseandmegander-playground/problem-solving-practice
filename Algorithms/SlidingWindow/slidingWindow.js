/**
 * Sliding Window Pattern
 * 
 * Problem Statement:
 * Given an array of positive numbers and a positive number 'k', find the maximum sum of any contiguous subarray of size 'k'.
 * 
 * Example 1:
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output : 9
 * 
 * Example 2:
 * Input: [2, 3, 4, 1, 5], k=2
 * Output: 7
 */

function maxSubarrayOfSizeK(k, arr) {
  let maxSum = 0;
  let currSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currSum += arr[windowEnd];

    // when the window capacity maxes out, slide the window to the right
    if (windowEnd >= k - 1) {
      maxSum = Math.max(currSum, maxSum);
      // slide the window
      //  Part I: remove the value of the item at windowStart's index
      //  Part II: slide windowStart to the right
      currSum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}

module.exports = maxSubarrayOfSizeK;