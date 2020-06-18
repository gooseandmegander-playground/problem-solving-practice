const longestSubstringWithKDistinctCharacters = require('./longestSubstringWithKDistinctCharacters');

describe(`${longestSubstringWithKDistinctCharacters.name} passes example tests`, () => {
  test('finds the length of the longest substring in it with no more than 2 distinct characters', () => {
    const k = 2;
    const str = "araaci";
    const smallestSubarrayLength = longestSubstringWithKDistinctCharacters(k, str);

    expect(smallestSubarrayLength).toBe(4);
  });

  test('finds the length of the longest substring in it with no more than 1 distinct characters', () => {
    const k = 1;
    const str = "araaci";
    const smallestSubarrayLength = longestSubstringWithKDistinctCharacters(k, str);

    expect(smallestSubarrayLength).toBe(2);
  });

  test('finds the length of the longest substring in it with no more than 3 distinct characters', () => {
    const k = 3;
    const str = "cbbebi";
    const smallestSubarrayLength = longestSubstringWithKDistinctCharacters(k, str);

    expect(smallestSubarrayLength).toBe(5);
  });
});