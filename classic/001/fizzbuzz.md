## FizzBuzz

#### Got from:

<em>Eloquent Javascript</em> book, by Marijn Haverbeke

#### The problem and the desired solution:

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

#### Link to answers:

- [Solution](fizzbuzz.js)

<details>
  <summary>Solution explained</summary>
  <p>The solution is a matter of looping 100 times using an incremented counter, and with each passing use conditionals to check if the number is divisible (ramainder = 0) by 3, 5 or both, and logging accordingly. It would alse be possible to increment a more flexible program by making the function accept two arguments and check against them, as in the flexFizzBuzz function.</p>
</details>
