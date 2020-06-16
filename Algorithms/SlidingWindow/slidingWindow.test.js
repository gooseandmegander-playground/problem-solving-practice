const maxSubarrayOfSizeK = require('./slidingWindow');

describe(`${maxSubarrayOfSizeK.name} passes example tests`, () => {
  test('finds the maximum sum of any contiguous subarray of size 3', () => {
    const k = 3;
    const arr = [2, 1, 5, 1, 3, 2];
    const maxSum = maxSubarrayOfSizeK(k, arr);

    expect(maxSum).toBe(9);
  });

  test('finds the maximum sum of any contiguous subarray of size 2', () => {
    const k = 2;
    const arr = [2, 3, 4, 1, 5];
    const maxSum = maxSubarrayOfSizeK(k, arr);

    expect(maxSum).toBe(7);
  });
});