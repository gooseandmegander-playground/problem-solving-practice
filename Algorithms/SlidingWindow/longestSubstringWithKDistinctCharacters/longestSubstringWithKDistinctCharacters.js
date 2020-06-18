/**
 * Sliding Window Pattern: Longest Substring with K Distinct Characters
 * 
 * Problem Statement:
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 * 
 * Example 1:
 * Input: "araaci", k=2
 * Output : 4
 * 
 * Example 2:
 * Input: "araaci", k=1
 * Output: 2
 * 
 * Example 3:
 * Input: "cbbebi", k=3
 * Output: 5
 */

function longestSubstringWithKDistinctCharacters(k, str) {
  let longestSubstringLength = 0;
  let start = 0;
  let charFrequency = {};

  for (let end = 0; end < str.length; end++) {
    const subEnd = str[end];

    // Add character to frequency map if it's not already
    if (!(subEnd in charFrequency)) {
      charFrequency[subEnd] = 0;
    }
    charFrequency[subEnd] += 1;

    // shrink sliding window until substring has 'k' dinstinct characters
    //   1. Shrink first substring character's frequency by one (handle frequency map)
    //   2. Delete first substring character if no longer in substring (handle frequency map)
    //   3. Next substring character becomes the first substring character (prep for next iteration)
    while (Object.keys(charFrequency).length > k) {
      const subStart = str[start];
      charFrequency[subStart] -= 1;  // 1.

      if (charFrequency[subStart] === 0) {
        delete charFrequency[subStart];  // 2.
      }
      start += 1;  // 3.
    }
    longestSubstringLength = Math.max(longestSubstringLength, (end - start) + 1);
  }

  return longestSubstringLength;
}

module.exports = longestSubstringWithKDistinctCharacters;