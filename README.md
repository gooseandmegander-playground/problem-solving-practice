# problem-solving-practice

The purpose of this repository is to record technical learnings from individual research, code challenges, etc used to study the fundamentals of computer science and problem solving.

## Content

Algorithms
* Sliding Window Pattern
    * [Max Subarray Sum of Size K](Algorithms/SlidingWindow/maxSubarraySumOfSizeK/maxSubarraySum.js)
    * [Smallest Subarray with a Given Sum](Algorithms/SlidingWindow/smallestSubarrayWithGivenSum/smallestSubarrayWithGivenSum.js)
    * [Longest Substring with K Distinct Characters](Algorithms/SlidingWindow/longestSubstringWithKDistinctCharacters/longestSubstringWithKDistinctCharacters.js)
* Two Pointers Pattern
    * [Pair with Target Sum](Algorithms/TwoPointers/pairWithTargetSum/pairWithTargetSum.js)
* Fast & Slow Pointers Pattern
    * [Linked List Cycle](Algorithms/FastAndSlowPointers/linkedlistcycle/linkedlistcycle.js)

## Usage

To get up and running:
`npm install`

To run Jest tests:
`npm run test`

To run Linting:
`npm run lint`

**Git Hooks**

There is currently a pre-commit git hook for linting in the .githooks directory.

To set up the "lint-staged-files" script in a pre-commit hook:

1. In the terminal, open the pre-commit.sample script (using Vim): `vi .git/hooks/pre-commit.sample`. Copy the "lint-staged-files" script and paste into "pre-commit.sample". If you're not familiar with Vim, you'll need to use `i` to insert text, "esc" to exit insert mode, and `:wq` to write to the file and close it.

2. Activate the hook by removing the sample file ending: `mv pre-commit.sample pre-commit`

3. Make the hook executable: `chmod +x pre-commit`

Take a bow. You did it! 🎉

## Troubleshooting

When running tests, if you see:
```
TypeError: (0, _vm(...).compileFunction) is not a function
at runtime._execModule (node_modules/jest-runtime/build/index.js:1166:56)
```

or

```
Oops! Something went wrong! :(
ESLint: 7.2.0
TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
```
check your version of node and use a current stable version. `nvm use stable` is handy.
