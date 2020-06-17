const smallestSubarrayWithGivenSum = require('./smallestSubarrayWithGivenSum');

describe(`${smallestSubarrayWithGivenSum.name} passes example tests`, () => {
  test('finds the length of the smallest contiguous subarray whose sum is greater than or equal to 7', () => {
    const s = 7;
    const arr = [2, 1, 5, 2, 3, 2];
    const smallestSubarrayLength = smallestSubarrayWithGivenSum(s, arr);

    expect(smallestSubarrayLength).toBe(2);
  });

  test('finds the length of the smallest contiguous subarray whose sum is greater than or equal to 7', () => {
    const s = 7;
    const arr = [2, 1, 5, 2, 8];
    const smallestSubarrayLength = smallestSubarrayWithGivenSum(s, arr);

    expect(smallestSubarrayLength).toBe(1);
  });

  test('finds the length of the smallest contiguous subarray whose sum is greater than or equal to 8', () => {
    const s = 8;
    const arr = [3, 4, 1, 1, 6];
    const smallestSubarrayLength = smallestSubarrayWithGivenSum(s, arr);

    expect(smallestSubarrayLength).toBe(3);
  });
});