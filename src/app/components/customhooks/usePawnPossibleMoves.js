import { useDispatch, useSelector } from "react-redux";

export const usePawnPossibleMoves = () => {
  const dispatch = useDispatch();
  dispatch(
    addCurrentSelectedPiece({
      i: chessObj.i,
      j: chessObj.j,
      chessPiece: chessObj.chessPiece,
      chessColor: chessObj.color,
      possibleMoveColor: chessObj.possibleMoveColor,
    })
  );

  const twoMoves = {
    i:
      chessObj.color === "white"
        ? Number(chessObj.i) - 2
        : Number(chessObj.i) + 2,
    j: Number(chessObj.j),
  };
  const oneMove = {
    i:
      chessObj.color === "white"
        ? Number(chessObj.i) - 1
        : Number(chessObj.i) + 1,
    j: Number(chessObj.j),
  };

  const updatedArray = chessBoard.map((row, _rowIndex) => {
    // if (rowIndex !== twoMoves.i && rowIndex !== oneMove.i) {
    //   return row;
    // }
    const updatedColumn = row.map((col) => {
      if (
        ((twoMoves.i === col.i && twoMoves.j === col.j) ||
          (oneMove.i === col.i && oneMove.j === col.j)) &&
        col.chessPiece === ""
      ) {
        return {
          ...col,
          possibleMoveColor: "#B9CA43",
        };
      } else {
        return {
          ...col,
          possibleMoveColor: "",
        };
      }
    });
    return updatedColumn;
  });
  dispatch(addChessBoard(updatedArray));
};
