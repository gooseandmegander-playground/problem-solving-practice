const pairWithTargetSum = require('./pairWithTargetSum');

describe(`${pairWithTargetSum.name} passes example tests`, () => {
  test('finds a pair in the array whose sum is equal to [1, 3]', () => {
    const targetSum = 6;
    const arr = [1, 2, 3, 4, 6];
    const pair = pairWithTargetSum(targetSum, arr);

    expect(pair).toEqual(expect.arrayContaining([1, 3]));
  });

  test('finds a pair in the array whose sum is equal to [0, 2]', () => {
    const targetSum = 11;
    const arr = [2, 5, 9, 11];
    const pair = pairWithTargetSum(targetSum, arr);

    expect(pair).toEqual(expect.arrayContaining([0, 2]));
  });

  test('returns an empty array when no pair is found', () => {
    const targetSum = 11;
    const arr = [2, 5, 5, 11];
    const pair = pairWithTargetSum(targetSum, arr);

    expect(pair).toEqual(expect.arrayContaining([]));
  });
});