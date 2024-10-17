const { createSlice } = require("@reduxjs/toolkit");

const chessBoardMatrix = createSlice({
  name: "Matrix",
  initialState: {
    chessBoard: [],
    currentSelectedPiece:,
  },
  reducers: {
    addChessBoard: (state, action) => {
      state.chessBoard = action.payload;
    },
    addCurrentSelectedPiece: (state, action) => {
      state.currentSelectedPiece=action.payload;
    },
  },
});

export const { addChessBoard ,addCurrentSelectedPiece} = chessBoardMatrix.actions;
export default chessBoardMatrix.reducer;
