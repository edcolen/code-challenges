## Problem 002 [hard]

#### Got from:

[Daily Coding Problem](https://www.dailycodingproblem.com/)

#### The problem and the desired solution:

This problem was asked by Uber.
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division?

#### Answers:

- [Solution](problem002.js)

<details>
  <summary>Solution explained</summary>
  <p>The reduce method seemed to be useful for this problem. First, taking advantage of the forth reduce argument, I created a function to iterate through the array removing (filter) the current element and using reduce and return the product of the rest of the numbers. Then, I used this function as a reducer and set an empty array as the initial value so that it would be populated with the products in the right order. Also without using division.</p>

</details>
