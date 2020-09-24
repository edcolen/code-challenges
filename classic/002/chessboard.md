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
  <p>My first try, using less lines of code worked fine with even sizes. Testing it with odd ones failed to return a checkered board. So my new approach considered changing the order of characters at each new line.</p>
</details>
