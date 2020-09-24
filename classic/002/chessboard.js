function chessboard(size) {
  let board = "";
  for (j = 1; j <= size; j++) {
    for (i = 1; i <= size; i++) {
      if (j % 2 != 0) {
        (i % 2 == 0) ? board += "#" : board += " ";
      } else {
        (i % 2 == 0) ? board += " " : board += "#";
      }
    }
    board += ("\n");
  } 
  console.log(board)
}