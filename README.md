# problem-solving-practice

The purpose of this repository is to record technical learnings from individual research, code challenges, etc used to study the fundamentals of computer science and problem solving.

## Content

Algorithms
* Sliding Window Pattern
    * [Max Subarray Sum of Size K](Algorithms/SlidingWindow/maxSubarraySumOfSizeK/maxSubarraySum.js)

## Usage

To get up and running:
`npm install`

To run Jest tests:
`npm run test`

## Troubleshooting

When running tests, if you see:
```
TypeError: (0, _vm(...).compileFunction) is not a function
at runtime._execModule (node_modules/jest-runtime/build/index.js:1166:56)
```
check your version of node and use a current stable version. `nvm use stable` is handy.
