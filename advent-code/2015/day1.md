## --- Day 1: Not Quite Lisp ---

#### Got from:

[Advent of Code](https://adventofcode.com)

#### The problem and the desired solution:

Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

For example:

    (()) and ()() both result in floor 0.
    ((( and (()(()( both result in floor 3.
    ))((((( also results in floor 3.
    ()) and ))( both result in floor -1 (the first basement level).
    ))) and )())()) both result in floor -3.

To what floor do the instructions take Santa?

[Get the puzzle input](day1.txt)

--- Part Two ---

Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

For example:

    ) causes him to enter the basement at character position 1.
    ()()) causes him to enter the basement at character position 5.

What is the position of the character that causes Santa to first enter the basement?

#### Answers:

- [Solution](day1.js)

<details>
  <summary>Solution explained</summary>
  <p>To keep the code a bit cleaner, I stored the input in a txt file and import it. Since I needed to check each character, I turned the resulting string into an array.</p>

  <p>Part One: First, I created a counter to keep track of floors. Then, I took the instructions array and iterated it, each time adding or substracting from the counter accordingly. The result (final floor) was logged at the end.</p>
  
  <p>Part Two: I added a second argument to the forEach() callback function to get the index of each character. Then, I added a conditional to push the position to a variable as soon as the elevator hit the basement (-1). As there would be multiple times of "basement arrivals", I just logged the first index (+ 1 since positions started at 1, not 0).</p>

</details>
