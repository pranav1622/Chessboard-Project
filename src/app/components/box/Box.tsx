"use client";

import { chessPiece } from "@/app/contants";
interface BoxProps {
  chessObj: chessPiece;
}
const boxSize = "w-full";
const Box: React.FC<BoxProps> = ({ chessObj }) => {
  const chessColor =
    chessObj.boxcolorNumber === 0 ? "bg-[#f5f5f5]" : "bg-[#d7b8a0]";
  const handlePossible = () => {
    console.log("hello");
  };
  const handlePawnMove = () => {
    console.log(chessObj.i);
    if (chessObj.i === 1) {
      const testcaseOne = `${chessObj.i + 1}${chessObj.j + 1}`;
      const testcaseTwo = `${chessObj.i + 2}${chessObj.j + 2}`;
      console.log(testcaseOne, testcaseTwo);
    } else {
      console.log(`${chessObj.i + 1}${chessObj.j + 1}`);
    }
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
      className={` h-[70px] ${boxSize} ${chessColor} text-black flex justify-center items-center`}
      onClick={handlePieceClick}
    >
      {chessObj.chessPiece}
    </h1>
  );
};
export default Box;
