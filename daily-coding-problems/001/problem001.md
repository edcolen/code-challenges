## Problem 001 [easy]

#### Got from:

[Daily Coding Problem](https://www.dailycodingproblem.com/)

#### The problem and the desired solution:

This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass?

#### Answers:

- [Solution](problem001.js)

<details>
  <summary>Solution explained</summary>
  <p>If k is a sum of two elemeents from the list, the result can be easily found in one iteration by checking if the list includes the result of k minus the actual element. In order to return true or false, I used a ternary operator and a counter, which would be different from zero in case the numbers add up to k.</p>

</details>
