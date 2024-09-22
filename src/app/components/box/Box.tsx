"use client";

import { chessPiece } from "@/app/contants";
import { addChessBoard } from "@/app/Slice/chessBoardMatrix";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
interface BoxProps {
  chessObj: chessPiece;
  chessBoard: chessPiece[][];
}
const boxSize = "w-full";
const Box: React.FC<BoxProps> = ({ chessObj, chessBoard }) => {
  const [prevMovedSelectedPiece, setPrevSelectedPiece] = useState({});
  const chessBgColor = chessObj.boxcolorNumber === 0 ? "#EBECD0" : "#6D8D4D";
  const piecePossibleMoves = chessObj.coloredBox ? chessObj.coloredBox : "";
  const chessColor = chessObj.color === "white" ? "text-white " : "text-black";
  const dispatch = useDispatch();

  const handlePawnMove = () => {
    //if black then this

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

    const updatedArray = chessBoard.map((row, rowIndex) => {
      if (rowIndex !== twoMoves.i && rowIndex !== oneMove.i) {
        return row;
      }
      const updatedColumn = row.map((col) => {
        if (
          ((twoMoves.i === col.i && twoMoves.j === col.j) ||
            (oneMove.i === col.i && oneMove.j === col.j)) &&
          col.chessPiece === ""
        ) {
          return {
            ...col,
            coloredBox: "#B9CA43",
          };
        } else {
          return {
            ...col,
            coloredBox: "",
          };
        }
      });
      return updatedColumn;
    });
    dispatch(addChessBoard(updatedArray));
  };

  const handleKingMove = () => {};
  const handleQueenMove = () => {};
  const handleBishopMove = () => {};
  const handleKnightMove = () => {};
  const handleRookMove = () => {};
  const handlePieceClick = (e: React.MouseEvent<HTMLDivElement>) => {
    switch (chessObj.chessPiece) {
      case "P":
        handlePawnMove();
        break;
      case "K":
        handleKingMove();
      case "Q":
        handleQueenMove();
      case "B":
        handleBishopMove();
      case "N":
        handleKnightMove();
      case "R":
        handleRookMove();
    }
  };
  return (
    <h1
      className={`h-[70px] ${boxSize} bg-[${chessBgColor}] ${chessColor} flex justify-center items-center cursor-pointer`}
      onClick={handlePieceClick}
      style={{
        borderWidth: piecePossibleMoves !== "" ? "3px" : "",
        borderColor:
          piecePossibleMoves !== "" ? piecePossibleMoves : "transparent",
      }}
    >
      <span>{chessObj.chessPiece}</span>
    </h1>
  );
};
export default Box;
