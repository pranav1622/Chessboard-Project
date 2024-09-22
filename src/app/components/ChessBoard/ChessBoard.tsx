import {
  baseBlackPieces,
  baseWhitePieces,
  chessPiece,
  frontlinePieces,
} from "@/app/contants";
import Box from "../box/Box";
const ChessBoard = () => {
  function createChessboardMatrix(): chessPiece[][] {
    const size = 8;
    const chessboard: chessPiece[][] = [];
    for (let i = 0; i < size; i++) {
      const row: chessPiece[] = [];

      for (let j = 0; j < size; j++) {
        let piece = "";
        let color = "";

        if (i === 0) {
          piece = baseBlackPieces[j];
          color = "black";
        } else if (i === 1) {
          piece = frontlinePieces[j];
          color = "black";
        } else if (i === 6) {
          piece = frontlinePieces[j];
          color = "white";
        } else if (i === 7) {
          piece = baseWhitePieces[j];
          color = "white";
        }

        row.push({
          i,
          j,
          boxcolorNumber: (i + j) % 2,
          chessPiece: piece,
          color: color || "",
          index: `${i}${j}`,
        });
      }

      chessboard.push(row);
    }

    return chessboard;
  }
  const handleClick = () => {};

  const chessboardMatrix = createChessboardMatrix();

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-8 w-[48%] border border-[#d7b8a0] ">
        {chessboardMatrix.map((row) =>
          row.map((column) => <Box key={column.index} chessObj={column} />)
        )}
      </div>
    </div>
  );
};

export default ChessBoard;
