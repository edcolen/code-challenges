## --- Day 5: Doesn't He Have Intern-Elves For This? ---

#### Got from:

[Advent of Code](https://adventofcode.com)

#### The problem and the desired solution:

Santa needs help figuring out which strings in his text file are naughty or nice.

A nice string is one with all of the following properties:

- It contains at least three vowels (aeiou only), like **aei**, **xazegov**, or **aeiouaeiouaeiou**.
- It contains at least one letter that appears twice in a row, like **xx**, **abcdde** (dd), or **aabbccdd** (aa, bb, cc, or dd).
- It does not contain the strings **ab**, **cd**, **pq**, or **xy**, even if they are part of one of the other requirements.

For example:

- **ugknbfddgicrmopn** is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
- **aaa** is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
- **jchzalrnumimnmhp** is naughty because it has no double letter.
- **haegwjzuvuyypxyu** is naughty because it contains the string xy.
- **dvszwmarrgswjxmb** is naughty because it contains only one vowel.

How many strings are nice?

[Get the puzzle input](day5.txt)

--- Part Two ---

Realizing the error of his ways, Santa has switched to a better model of determining whether a string is naughty or nice. None of the old rules apply, as they are all clearly ridiculous.

Now, a nice string is one with all of the following properties:

- It contains a pair of any two letters that appears at least twice in the string without overlapping, like **xyxy** (xy) or **aabcdefgaa** (aa), but not like **aaa** (aa, but it overlaps).
- It contains at least one letter which repeats with exactly one letter between them, like **xyx**, **abcdefeghi** (efe), or even **aaa**.

For example:

- **qjhvhtzxzqqjkmpb** is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).
- **xxyxx** is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.
- **uurcxstgmygtbstg** is naughty because it has a pair (tg) but no repeat with a single letter between them.
- **ieodomkazucvgmuy** is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.

How many strings are nice under these new rules?

#### Answers:

- [Solution](day5.js)

<details>
  <summary>Solution explained</summary>
  <p>To keep the code a bit cleaner, I stored the input in a txt file and import it. Each line was returned as a string inside an array by The readFileSync.</p>

  <p>Part One: First, I created a separate function to submit the strings and test each condition. The "checkVowels" function has a counter that that increases 1 point every time the string matches a regex set of vowels. If the counter ends up with at leat 3, it returns true. The "checkDoubles" function iterates through the string checking if the character in the next index is the same as the current one, returning true if they are. The "checkDisallowed" function basically has a regex to test if the string has any of the disallowed character pairs. The "stringNice1" function iterates through the array os strings checking if each one of them matches all three criteria. Finally, the "countNiceStr1" logs the length of the array made of "nice strings", that is, the solution to the first part of the problem.</p>

  <p>Part Two: First, I created a separate function to submit the strings and test each condition. The "checkPairs" function iterates through the string picking a pair of characters and checking if it repeats in the remaining slice, returning true if it does. The "checkLetterMiddle" function iterates through the string checking if it contains at least one letter which repeats with exactly one letter between them. The "stringNice2" function iterates through the array os strings checking if each one of them matches all two criteria. Finally, the "countNiceStr2" logs the length of the array made of "nice strings", that is, the solution to the second part of the problem.</p>
  </details>
