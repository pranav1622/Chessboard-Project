import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { chessPiece } from "@/app/contants";
interface ChessBoardMatrixState {
  chessBoard: chessPiece[][];
  currentSelectedPiece: chessPiece | null;
}

const initialState: ChessBoardMatrixState = {
  chessBoard: [],
  currentSelectedPiece: null,
};
const chessBoardMatrix = createSlice({
  name: "Matrix",
  initialState,
  reducers: {
    addChessBoard: (state, action: PayloadAction<chessPiece[][]>) => {
      state.chessBoard = action.payload;
    },
    addCurrentSelectedPiece: (
      state,
      action: PayloadAction<chessPiece | null>
    ) => {
      state.currentSelectedPiece = action.payload;
    },
  },
});

export const { addChessBoard, addCurrentSelectedPiece } =
  chessBoardMatrix.actions;
export default chessBoardMatrix.reducer;
