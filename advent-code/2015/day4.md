## --- Day 4: The Ideal Stocking Stuffer ---

#### Got from:

[Advent of Code](https://adventofcode.com)

#### The problem and the desired solution:

Santa needs help mining some AdventCoins (very similar to bitcoins) to use as gifts for all the economically forward-thinking little girls and boys.

To do this, he needs to find MD5 hashes which, in hexadecimal, start with at least five zeroes. The input to the MD5 hash is some secret key (your puzzle input, given below) followed by a number in decimal. To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...) that produces such a hash.

For example:

- If your secret key is abcdef, the answer is **609043**, because the MD5 hash of abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest such number to do so.
- If your secret key is pqrstuv, the lowest number it combines with to make an MD5 hash starting with five zeroes is **1048970**; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef....

[Get the puzzle input](day4.txt)

--- Part Two ---

Now find one that starts with six zeroes.

#### Answers:

- [Solution](day4.js)

<details>
  <summary>Solution explained</summary>
  <p>To keep the code a bit cleaner, I stored the input in a txt file and import it. The, I stored the resulting string into a "secretKey" variable. In order to save me some time, instead of implementing the md5 generation algorithm myself, I just imported a module to do the task. With more time, or if it would be really necessary, I would implement it.</p>

  <p>Part One: To solve this part I created a "findFiveZeros" function which has a loop that would run while the challenge solution criteria isn't met. That is, while the first five characters of the hash string differ from "00000". In each passing it adds 1 to a number and concatenates it at the end of the "secretKey" to generate a new hash. When it breaks from the loop, the correct number and the actual hash are logged.</p>

  <p>Part Two: Same as the first one, except the "findSixZeros" function has a different condition: it compares the first 6 character substring from the hash with "000000".</p>

</details>
