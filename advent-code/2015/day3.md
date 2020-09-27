## --- Day 3: Perfectly Spherical Houses in a Vacuum ---

#### Got from:

[Advent of Code](https://adventofcode.com)

#### The problem and the desired solution:

Santa is delivering presents to an infinite two-dimensional grid of houses.

He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new location.

However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once. How many houses receive at least one present?

For example:

    - > delivers presents to 2 houses: one at the starting location, and one to the east.
    - ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
    - ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.

[Get the puzzle input](day3.txt)

--- Part Two ---

The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.

Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.

This year, how many houses receive at least one present?

For example:

    - ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
    - ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
    - ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.

#### Answers:

- [Solution](day3.js)

<details>
  <summary>Solution explained</summary>
  <p>To keep the code a bit cleaner, I stored the input in a txt file and import it. Since I needed to check each character, I turned the resulting string into an array. The callenge proposes a 2D grid, so I decided to work with cartesian coodinates, each house being a pair of x and y values. </p>

  <p>Part One: I created the "trackPosition" function to iterate through the directions array and produce a new associative array with the position of each house acordingly. Also, I added a conditional to check if the position key already existed, which would add it to the position score - this would be useful in case we needed to know how many gifts each house received. Finally, since associative arrays don't respond to the length method, I turned into a numeric array to count how many houses were visited by Santa.</p>

  <p>Part Two: I started by creating the "santaWithRobotPositions" function that distributed the directions to Santa and the robot using the index of each element to take turns. Then, I applied the function used in Part One to get an array with the houses visited by each character and merge both at the end. To get the result, like in the first part, I just needed to know the length of that array.</p>

</details>
