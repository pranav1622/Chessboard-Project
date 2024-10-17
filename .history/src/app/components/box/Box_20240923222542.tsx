"use client";

import { chessPiece } from "@/app/contants";
import { addChessBoard, addCurrentSelectedPiece } from "@/app/Slice/chessBoardMatrix";
import { useDispatch, useSelector } from "react-redux";
interface BoxProps {
  chessObj: chessPiece;
  chessBoard: chessPiece[][];
}
const boxSize = "w-full";
const Box: React.FC<BoxProps> = ({ chessObj, chessBoard }) => {
  const chessBgColor = chessObj.boxcolorNumber === 0 ? "#EBECD0" : "#6D8D4D";
  const piecePossibleMoves = chessObj.possibleMoveColor ? chessObj.possibleMoveColor : "";
  const chessColor = chessObj.color === "white" ? "text-[#ca5143] " : "text-black";
  const dispatch = useDispatch();

  const currentSelectedPiece = useSelector(
    (store) => store.ChessBoardMatrix.currentSelectedPiece
  );
  
  const handleMove=()=>{
    const currentBox=chessObj;
    console.log(currentBox)
    if(currentSelectedPiece.chessColor){
      const updatedMatrix=chessBoard.map((row)=>{
        const updatedColumn=row.map((column)=>{
          if(currentBox.i === column.i && currentBox.j === column.j && column.possibleMoveColor !== ""){
            return {
              ...column,
              chessPiece: currentSelectedPiece.chessPiece,
              color: currentSelectedPiece.chessColor,
              possibleMoveColor:"",
            }
          }
          else if(currentSelectedPiece && currentSelectedPiece.i===column.i && currentSelectedPiece.j===column.j){
            return {
              ...column,
              chessPiece:'',
              possibleMoveColor:"",
            }
          }else{
            return {
              ...column,
              possibleMoveColor:"",
            }
          }
        })
        return updatedColumn
      })

      if(currentSelectedPiece){
        dispatch(addChessBoard(updatedMatrix))
        dispatch(addCurrentSelectedPiece(null))
      }

    }
  }

  const handlPawnPossibleMoves = () => {
    //if black then this
    dispatch(addCurrentSelectedPiece({
      i:chessObj.i,
      j:chessObj.j,
      chessPiece:chessObj.chessPiece,
      chessColor:chessObj.color,
      possibleMoveColor:chessObj.possibleMoveColor
    }))
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

  const handleKingPossibleMoves = () => {};
  const handleQueenPossibleMoves = () => {};
  const handleBishopPossibleMoves = () => {};
  const handleKnightPossibleMoves = () => {};
  const handleRookPossibleMoves = () => {};

  const handlePieceClick = (e: React.MouseEvent<HTMLDivElement>) => {
    switch (chessObj.chessPiece) {
      case "P":
        handlPawnPossibleMoves();
        break;
      case "K":
        handleKingPossibleMoves();
      case "Q":
        handleQueenPossibleMoves();
      case "B":
        handleBishopPossibleMoves();
      case "N":
        handleKnightPossibleMoves();
      case "R":
        handleRookPossibleMoves();
      default:
        handleMove()

    }
  };

  return (
    <h1
      className={`h-[70px] ${boxSize} bg-[${chessBgColor}] ${chessColor} flex justify-center items-center cursor-pointer`}
      onClick={handlePieceClick}
      style={{
        background:chessBgColor,
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
