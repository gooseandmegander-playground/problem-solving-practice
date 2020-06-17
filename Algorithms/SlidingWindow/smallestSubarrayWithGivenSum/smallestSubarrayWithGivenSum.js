/**
 * Sliding Window Pattern: Smallest Subarray with a given sum
 *
 * Problem Statement:
 * Given an array of positive numbers and a positive number 's', find the length of the smallest contiguous subarray whose sum is greater than or equal to 's'. Return 0 if no such subarray exists.
 * 
 * Example 1:
 * Input: [2, 1, 5, 2, 3, 2], s=7
 * Output: 2
 * 
 * Example 2:
 * Input: [2, 1, 5, 2, 8], s=7
 * Output: 1
 * 
 * Example 3:
 * Input: [3, 4, 1, 1, 6], s=8
 * Output: 3
 */

function smallestSubarrayWithGivenSum(s, arr) {
  let smallestSubarrayLength = Infinity;
  let windowStart = 0;
  let windowSum = 0;

  // iterate through entire array
  // where the window *begins* and ends at index 0
  //   add the current window "pane" value to the *window sum*
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    //  when the *window sum* is >= s
    //    update smallestSubarrayLength if it is min
    //    slide the window
    while (windowSum >= s) {
      let windowLength = (windowEnd - windowStart) + 1;
      smallestSubarrayLength = Math.min(smallestSubarrayLength, windowLength);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  if (smallestSubarrayLength === Infinity) {
    return 0;
  }
  return smallestSubarrayLength;
}

module.exports = smallestSubarrayWithGivenSum;