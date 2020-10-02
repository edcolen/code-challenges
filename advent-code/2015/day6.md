## --- Day 6: Probably a Fire Hazard ---

#### Got from:

[Advent of Code](https://adventofcode.com)

#### The problem and the desired solution:

Because your neighbors keep defeating you in the holiday house decorating contest year after year, you've decided to deploy one million lights in a 1000x1000 grid.

Furthermore, because you've been especially nice this year, Santa has mailed you instructions on how to display the ideal lighting configuration.

Lights in your grid are numbered from 0 to 999 in each direction; the lights at each corner are at **0,0, 0,999, 999,999, and 999,0**. The instructions include whether to **turn on**, **turn off**, or toggle various inclusive ranges given as coordinate pairs. Each coordinate pair represents opposite corners of a rectangle, inclusive; a coordinate pair like **0,0** through **2,2** therefore refers to 9 lights in a 3x3 square. The lights all start turned off.

To defeat your neighbors this year, all you have to do is set up your lights by doing the instructions Santa sent you in order.

For example:

- **turn on 0,0 through 999,999** would turn on (or leave on) every light.
- **toggle 0,0 through 999,0** would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.
- **turn off 499,499 through 500,500** would turn off (or leave off) the middle four lights.

After following the instructions, how many lights are lit?

[Get the puzzle input](day6.txt)

--- Part Two ---

#### Answers:

- [Solution](day5.js)

<details>
  <summary>Solution explained</summary>
  <p>To keep the code a bit cleaner, I stored the input in a txt file and import it. Each line was returned as a string inside an array by The readFileSync.</p>

  <p>Part One: First, I created a separate function to submit the strings and test each condition. The "checkVowels" function has a counter that that increases 1 point every time the string matches a regex set of vowels. If the counter ends up with at leat 3, it returns true. The "checkDoubles" function iterates through the string checking if the character in the next index is the same as the current one, returning true if they are. The "checkDisallowed" function basically has a regex to test if the string has any of the disallowed character pairs. The "stringNice1" function iterates through the array os strings checking if each one of them matches all three criteria. Finally, the "countNiceStr1" logs the length of the array made of "nice strings", that is, the solution to the first part of the problem.</p>

  <p>Part Two: First, I created a separate function to submit the strings and test each condition. The "checkPairs" function iterates through the string picking a pair of characters and checking if it repeats in the remaining slice, returning true if it does. The "checkLetterMiddle" function iterates through the string checking if it contains at least one letter which repeats with exactly one letter between them. The "stringNice2" function iterates through the array os strings checking if each one of them matches all two criteria. Finally, the "countNiceStr2" logs the length of the array made of "nice strings", that is, the solution to the second part of the problem.</p>
  </details>
