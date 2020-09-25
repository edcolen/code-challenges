## Chessboard

#### Got from:

<em>Eloquent Javascript</em> book, by Marijn Haverbeke

#### The problem and the desired solution:

Write a program that creates a string that represents an 8x8 grid, using new-line characters to separate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboard.
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

#### Link to answers:

- [Solution](chessboard.js)

<details>
  <summary>Solution explained</summary>
  <p>Using less lines of code on my first try worked fine with even sizes. Testing it with odd ones failed to return a checkered board, just a striped one. So on my new approach considered changing the order of characters at each new line. I created a loop for each line, adding the "\n" at the end, and a loop to populate it with characters.</p>
</details>
