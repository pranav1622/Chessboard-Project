const { createSlice } = require("@reduxjs/toolkit");

const chessBoardMatrix = createSlice({
  name: "Matrix",
  initialState: {
    chessBoard: [],
  },
  reducers: {
    addChessBoard: (state, action) => {
      state.chessBoard = action.payload;
    },
  },
});

export const { addChessBoard } = chessBoardMatrix.actions;
export default chessBoardMatrix.reducer;
